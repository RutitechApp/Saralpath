// import {
//   InterstitialAd,
//   TestIds,
//   AdEventType,
// } from "react-native-google-mobile-ads";
// import remoteConfig from "@react-native-firebase/remote-config";

// /**
//  * ===============================
//  * Remote Config Setup
//  * ===============================
//  */

// remoteConfig().setConfigSettings({
//   minimumFetchIntervalMillis: 3600000,
// });

// remoteConfig().setDefaults({
//   interstitial_sequence: "7,5,8",
// });

// /**
//  * ===============================
//  * Interstitial Creation
//  * ===============================
//  */

// let isAdLoaded = false;
// let interstitial = createInterstitial();

// function createInterstitial() {
//   const ad = InterstitialAd.createForAdRequest(
//     __DEV__ ? TestIds.INTERSTITIAL : "ca-app-pub-3810123126111899/8041790160",
//   );

//   ad.addAdEventListener(AdEventType.LOADED, () => {
//     isAdLoaded = true;
//     console.log("Interstitial loaded");
//   });
//   ad.addAdEventListener(AdEventType.ERROR, (e) => {
//     console.log("Interstitial error:", e);
//     isAdLoaded = false;

//     // recreate ad
//     setTimeout(() => {
//       interstitial = createInterstitial();
//     }, 2000);
//   });
//   ad.load();

//   return ad;
// }

// /**
//  * ===============================
//  * Click Pattern Logic
//  * ===============================
//  */

// let clickCount = 0;
// let patternIndex = 0;
// let clickPattern: number[] = [7, 5, 8]; // fallback default

// /**
//  * Fetch once at startup
//  */
// export const initializeInterstitialConfig = async () => {
//   try {
//     await remoteConfig().fetchAndActivate();

//     const seq = remoteConfig().getValue("interstitial_sequence").asString();

//     const parsed = seq
//       .split(",")
//       .map((n) => parseInt(n.trim(), 10))
//       .filter((n) => !isNaN(n) && n > 0);

//     if (parsed.length > 0) {
//       clickPattern = parsed;
//     }

//     console.log("Interstitial pattern:", clickPattern);
//   } catch (e) {
//     console.log("Remote config failed, using default");
//   }
// };

// /**
//  * Optional manual preload
//  */
// export const preloadInterstitial = () => {
//   if (!isAdLoaded) {
//     interstitial.load();
//   }
// };

// /**
//  * ===============================
//  * MAIN HANDLER
//  * ===============================
//  */

// export const handleInterstitialClick = async (onComplete: () => void) => {
//   try {
//     clickCount++;

//     const target = clickPattern[patternIndex];

//     console.log(
//       `Click: ${clickCount} | Target: ${target} | Loaded: ${isAdLoaded}`,
//     );

//     if (clickCount < target) {
//       onComplete();
//       return;
//     }

//     if (!isAdLoaded) {
//       console.log("Ad not loaded yet, waiting...");

//       const loadListener = interstitial.addAdEventListener(
//         AdEventType.LOADED,
//         () => {
//           loadListener();

//           const unsubscribe = interstitial.addAdEventListener(
//             AdEventType.CLOSED,
//             () => {
//               unsubscribe();
//               clickCount = 0;
//               patternIndex = (patternIndex + 1) % clickPattern.length;

//               isAdLoaded = false;
//               interstitial = createInterstitial();

//               onComplete();
//             },
//           );

//           interstitial.show();
//         },
//       );

//       interstitial.load();
//       return;
//     }
//     const unsubscribe = interstitial.addAdEventListener(
//       AdEventType.CLOSED,
//       () => {
//         unsubscribe();

//         clickCount = 0;
//         patternIndex = (patternIndex + 1) % clickPattern.length;

//         isAdLoaded = false;
//         interstitial = createInterstitial();

//         onComplete();
//       },
//     );

//     interstitial.show();
//   } catch (error) {
//     console.warn("Interstitial error:", error);
//     onComplete();
//   }
// };

import {
  InterstitialAd,
  TestIds,
  AdEventType,
} from "react-native-google-mobile-ads";
import remoteConfig from "@react-native-firebase/remote-config";

/**
 * ===============================
 * Remote Config Setup
 * ===============================
 */

remoteConfig().setConfigSettings({
  minimumFetchIntervalMillis: 3600000,
});

remoteConfig().setDefaults({
  interstitial_sequence: "7,5,8",
});

/**
 * ===============================
 * Ad Instance
 * ===============================
 */

let interstitial: any = null;
let isAdLoaded = false;

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : "ca-app-pub-3810123126111899/8041790160";

/**
 * Create new interstitial
 */
function createInterstitial() {
  const ad = InterstitialAd.createForAdRequest(adUnitId);

  ad.addAdEventListener(AdEventType.LOADED, () => {
    console.log("Interstitial loaded");
    isAdLoaded = true;
  });

  ad.addAdEventListener(AdEventType.ERROR, (error) => {
    console.log("Interstitial error:", error);
    isAdLoaded = false;

    // recreate ad after error
    setTimeout(() => {
      interstitial = createInterstitial();
    }, 2000);
  });

  ad.load();

  return ad;
}

/**
 * ===============================
 * Click Pattern Logic
 * ===============================
 */

let clickCount = 0;
let patternIndex = 0;
let clickPattern: number[] = [7, 5, 8];

/**
 * Fetch pattern from Remote Config
 */
export const initializeInterstitialConfig = async () => {
  try {
    await remoteConfig().fetchAndActivate();

    const seq = remoteConfig().getValue("interstitial_sequence").asString();

    const parsed = seq
      .split(",")
      .map((n) => parseInt(n.trim(), 10))
      .filter((n) => !isNaN(n) && n > 0);

    if (parsed.length > 0) {
      clickPattern = parsed;
    }

    console.log("Interstitial pattern:", clickPattern);
  } catch (e) {
    console.log("Remote config failed, using default pattern");
  }
};

/**
 * ===============================
 * Preload Ad
 * ===============================
 */

export const preloadInterstitial = () => {
  if (!interstitial) {
    interstitial = createInterstitial();
  } else if (!isAdLoaded) {
    interstitial.load();
  }
};

/**
 * ===============================
 * MAIN CLICK HANDLER
 * ===============================
 */

export const handleInterstitialClick = (onComplete: () => void) => {
  try {
    clickCount++;

    const target = clickPattern[patternIndex];

    console.log(
      `Click: ${clickCount} | Target: ${target} | Loaded: ${isAdLoaded}`,
    );

    if (clickCount < target) {
      onComplete();
      return;
    }

    if (!interstitial || !isAdLoaded) {
      console.log("Ad not ready, skipping");
      clickCount = 0;
      onComplete();
      preloadInterstitial();
      return;
    }

    const unsubscribeClosed = interstitial.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        unsubscribeClosed();

        clickCount = 0;
        patternIndex = (patternIndex + 1) % clickPattern.length;

        isAdLoaded = false;

        interstitial = createInterstitial();

        onComplete();
      },
    );

    interstitial.show();
  } catch (error) {
    console.warn("Interstitial error:", error);
    onComplete();
  }
};
