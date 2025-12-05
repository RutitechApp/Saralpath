import React, { useEffect } from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import { MobileAds } from 'react-native-google-mobile-ads';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/i18n/ index';
import { FontSizeProvider } from './src/constants/FontSizeContext';
import { Platform, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from './src/constants/ThemeContext';

const App = () => {
  useEffect(() => {
    const initializeAds = async () => {
      try {
        const result = await MobileAds().initialize();
        console.log('Google Mobile Ads initialized successfully ✅', result);
      } catch (error) {
        console.log('Ads initialization failed ❌', error);
      }
    };

    initializeAds();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      Platform.OS === 'android' && SplashScreen.hide();
    }, 2000);
  }, []);
  return (
    <ThemeProvider>
      <FontSizeProvider>
        <I18nextProvider i18n={i18n}>
          <StatusBar barStyle={'dark-content'} />
          <AppNavigation />
        </I18nextProvider>
      </FontSizeProvider>
    </ThemeProvider>
  );
};

export default App;
