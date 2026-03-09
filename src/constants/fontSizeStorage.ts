import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'APP_FONT_SCALE';

export const saveFontScale = async (value: number) => {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(value));
  } catch (e) {
  }
};

export const loadFontScale = async () => {
  try {
    const stored = await AsyncStorage.getItem(KEY);
    return stored ? JSON.parse(stored) : 1;
  } catch (e) {
    return 1;
  }
};
