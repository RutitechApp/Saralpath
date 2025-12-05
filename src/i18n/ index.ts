import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from '../i18n/ languages/en.json';
import hi from '../i18n/ languages/hi.json';
import gu from '../i18n/ languages/gu.json';
import bn from '../i18n/ languages/bn.json';
import or from '../i18n/ languages/or.json';
import te from '../i18n/ languages/te.json';
import ta from '../i18n/ languages/ta.json';
import ml from '../i18n/ languages/ml.json';
import mr from '../i18n/ languages/mr.json';
import kn from '../i18n/ languages/kn.json';
import kok from '../i18n/ languages/kok.json';
const LANG_KEY = 'APP_LANGUAGE';

export const setAppLanguage = async lang => {
  await AsyncStorage.setItem(LANG_KEY, lang);
  i18n.changeLanguage(lang);
};

export const getAppLanguage = async () => {
  const saved = await AsyncStorage.getItem(LANG_KEY);
  return saved || RNLocalize.getLocales()[0].languageCode;
};

const initI18n = async () => {
  const lang = await getAppLanguage();

  i18n.use(initReactI18next).init({
    lng: lang,
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      hi: { translation: hi },
      bn: { translation: bn },
      or: { translation: or },
      te: { translation: te },
      ta: { translation: ta },
      ml: { translation: ml },
      mr: { translation: mr },
      gu: { translation: gu },
      kn: { translation: kn },
      kok: { translation: kok },
    },
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
