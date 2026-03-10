import React, { useEffect } from "react";
import { MobileAds } from "react-native-google-mobile-ads";
import { I18nextProvider } from "react-i18next";
import i18n from "./src/i18n/ index";
import { FontSizeProvider } from "./src/constants/FontSizeContext";
import { Platform } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { ThemeProvider } from "./src/constants/ThemeContext";
import AppContent from "./src/navigation/AppContent";
import { RemoteConfig } from "./src/context/remoteConfig";

const App = () => {
  useEffect(() => {
    const initializeAds = async () => {
      try {
        const result = await MobileAds().initialize();
      } catch (error) {}
    };

    initializeAds();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      Platform.OS === "android" && SplashScreen.hide();
    }, 2000);
  }, []);
  return (
    <RemoteConfig>
      <ThemeProvider>
        <FontSizeProvider>
          <I18nextProvider i18n={i18n}>
            <AppContent />
          </I18nextProvider>
        </FontSizeProvider>
      </ThemeProvider>
    </RemoteConfig>
  );
};

export default App;
