import React, { createContext, useContext, useEffect, useState } from "react";
import remoteConfig from "@react-native-firebase/remote-config";

const RemoteConfigContext = createContext<any>(null);

export const RemoteConfig = ({ children }: any) => {
  const [ads, setAds] = useState({
    bannerAdId: "",
    interstitialAdId: "",
    appOpenAdId: "",
    nativeAdId: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRemoteConfig = async () => {
      try {
        await remoteConfig().setDefaults({
          android_banner_ad_id: "",
          android_interstitial_ad_id: "",
          android_app_open_ad_id: "",
          android_native_ad_id: "",
        });

        await remoteConfig().fetchAndActivate();

        const bannerAdId = remoteConfig()
          .getValue("android_banner_ad_id")
          .asString();

        const interstitialAdId = remoteConfig()
          .getValue("android_interstitial_ad_id")
          .asString();

        const appOpenAdId = remoteConfig()
          .getValue("android_app_open_ad_id")
          .asString();

        const nativeAdId = remoteConfig()
          .getValue("android_native_ad_id")
          .asString();

        setAds({
          bannerAdId,
          interstitialAdId,
          appOpenAdId,
          nativeAdId,
        });
      } catch (error) {
        console.log("Remote Config Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRemoteConfig();
  }, []);

  return (
    <RemoteConfigContext.Provider value={{ ads, loading }}>
      {children}
    </RemoteConfigContext.Provider>
  );
};

export const useAds = () => {
  return useContext(RemoteConfigContext);
};
