import { useEffect, useRef } from "react";
import {
  InterstitialAd,
  TestIds,
  AdEventType,
} from "react-native-google-mobile-ads";
import remoteConfig from "@react-native-firebase/remote-config";
import { useAds } from "../context/remoteConfig";

export const useInterstitialAds = () => {
  const { ads } = useAds();

  const interstitial = useRef<any>(null);
  const isAdLoaded = useRef(false);

  const clickCount = useRef(0);
  const patternIndex = useRef(0);
  const clickPattern = useRef<number[]>([7, 5, 8]);

  const adUnitId = __DEV__
    ? TestIds.INTERSTITIAL
    : ads.interstitialAdId || TestIds.INTERSTITIAL;

  useEffect(() => {
    remoteConfig().setConfigSettings({
      minimumFetchIntervalMillis: 3600000,
    });

    remoteConfig().setDefaults({
      interstitial_sequence: "7,5,8",
    });

    initializeInterstitialConfig();
    preloadInterstitial();
  }, [ads]);

  const createInterstitial = () => {
    const ad = InterstitialAd.createForAdRequest(adUnitId);

    ad.addAdEventListener(AdEventType.LOADED, () => {
      console.log("Interstitial loaded");
      isAdLoaded.current = true;
    });

    ad.addAdEventListener(AdEventType.ERROR, (error) => {
      console.log("Interstitial error:", error);
      isAdLoaded.current = false;

      setTimeout(() => {
        interstitial.current = createInterstitial();
      }, 2000);
    });

    ad.load();

    return ad;
  };

  const initializeInterstitialConfig = async () => {
    try {
      await remoteConfig().fetchAndActivate();

      const seq = remoteConfig().getValue("interstitial_sequence").asString();

      console.log("seq", seq);

      const parsed = seq
        .split(",")
        .map((n) => parseInt(n.trim(), 10))
        .filter((n) => !isNaN(n) && n > 0);

      if (parsed.length > 0) {
        clickPattern.current = parsed;
      }

      console.log("Interstitial pattern:", clickPattern.current);
    } catch {
      console.log("Remote config failed, using default pattern");
    }
  };

  const preloadInterstitial = () => {
    if (!interstitial.current) {
      interstitial.current = createInterstitial();
    } else if (!isAdLoaded.current) {
      interstitial.current.load();
    }
  };

  const handleInterstitialClick = (onComplete: () => void) => {
    try {
      clickCount.current++;

      const target = clickPattern.current[patternIndex.current];

      console.log(
        `Click: ${clickCount.current} | Target: ${target} | Loaded: ${isAdLoaded.current}`,
      );

      if (clickCount.current < target) {
        onComplete();
        return;
      }

      if (!interstitial.current || !isAdLoaded.current) {
        console.log("Ad not ready, skipping");

        clickCount.current = 0;

        onComplete();
        preloadInterstitial();
        return;
      }

      const unsubscribeClosed = interstitial.current.addAdEventListener(
        AdEventType.CLOSED,
        () => {
          unsubscribeClosed();

          clickCount.current = 0;
          patternIndex.current =
            (patternIndex.current + 1) % clickPattern.current.length;

          isAdLoaded.current = false;

          interstitial.current = createInterstitial();

          onComplete();
        },
      );

      interstitial.current.show();
    } catch (error) {
      console.warn("Interstitial error:", error);
      onComplete();
    }
  };

  return {
    handleInterstitialClick,
    preloadInterstitial,
  };
};
