import React, { useEffect, useState } from "react";
import {
  NativeAdView,
  TestIds,
  NativeAd,
  NativeAdEventType,
  NativeMediaAspectRatio,
  NativeMediaView,
} from "react-native-google-mobile-ads";
import { useAds } from "../context/remoteConfig";

const NativeAdCard = () => {
  const [nativeAd, setNativeAd] = useState<NativeAd>();
  const { ads } = useAds();

  const adUnitId = __DEV__ ? TestIds.NATIVE : ads.nativeAdId;
  useEffect(() => {
    NativeAd.createForAdRequest(adUnitId, {
      aspectRatio: NativeMediaAspectRatio.LANDSCAPE,
    })
      .then(setNativeAd)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!nativeAd) {
      return;
    }
    nativeAd.addAdEventListener(NativeAdEventType.IMPRESSION, () => {
      console.debug("Native ad impression");
    });
    nativeAd.addAdEventListener(NativeAdEventType.CLICKED, () => {
      console.debug("Native ad clicked");
    });
    nativeAd.addAdEventListener(NativeAdEventType.PAID, (payload) => {
      console.debug("Paid", payload);
    });
    nativeAd.addAdEventListener(NativeAdEventType.VIDEO_PLAYED, () => {
      console.debug("Native ad video played");
    });
    nativeAd.addAdEventListener(NativeAdEventType.VIDEO_PAUSED, () => {
      console.debug("Native ad video paused");
    });
    nativeAd.addAdEventListener(NativeAdEventType.VIDEO_ENDED, () => {
      console.debug("Native ad video ended");
    });
    nativeAd.addAdEventListener(NativeAdEventType.VIDEO_MUTED, () => {
      console.debug("Native ad video muted");
    });
    nativeAd.addAdEventListener(NativeAdEventType.VIDEO_UNMUTED, () => {
      console.debug("Native ad video unmuted");
    });
    return () => nativeAd.destroy();
  }, [nativeAd]);

  if (!nativeAd) {
    return null;
  }

  return (
    <NativeAdView nativeAd={nativeAd}>
      <NativeMediaView />
    </NativeAdView>
  );
};

export default NativeAdCard;
