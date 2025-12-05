import React, { useEffect, useState } from 'react';
import {
  NativeAdView,
  TestIds,
  NativeAd,
  NativeAdEventType,
  NativeMediaAspectRatio,
  NativeMediaView,
} from 'react-native-google-mobile-ads';

const NativeAdCard = () => {
  const [nativeAd, setNativeAd] = useState<NativeAd>();

  useEffect(() => {
    NativeAd.createForAdRequest(TestIds.GAM_NATIVE, {
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
      console.debug('Native ad impression');
    });
    nativeAd.addAdEventListener(NativeAdEventType.CLICKED, () => {
      console.debug('Native ad clicked');
    });
    nativeAd.addAdEventListener(NativeAdEventType.PAID, payload => {
      console.debug('Paid', payload);
    });
    nativeAd.addAdEventListener(NativeAdEventType.VIDEO_PLAYED, () => {
      console.debug('Native ad video played');
    });
    nativeAd.addAdEventListener(NativeAdEventType.VIDEO_PAUSED, () => {
      console.debug('Native ad video paused');
    });
    nativeAd.addAdEventListener(NativeAdEventType.VIDEO_ENDED, () => {
      console.debug('Native ad video ended');
    });
    nativeAd.addAdEventListener(NativeAdEventType.VIDEO_MUTED, () => {
      console.debug('Native ad video muted');
    });
    nativeAd.addAdEventListener(NativeAdEventType.VIDEO_UNMUTED, () => {
      console.debug('Native ad video unmuted');
    });
    return () => nativeAd.destroy();
  }, [nativeAd]);

  if (!nativeAd) {
    return null;
  }

  return (
    <NativeAdView nativeAd={nativeAd} style={{ paddingTop: 15 }}>
      <NativeMediaView />
    </NativeAdView>
  );
};

export default NativeAdCard;
