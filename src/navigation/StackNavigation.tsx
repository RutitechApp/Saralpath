import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";
import Home from "../screens/Home";
import List from "../screens/List";
import Setting from "../screens/Setting";
import {
  AppOpenAd,
  TestIds,
  AdEventType,
} from "react-native-google-mobile-ads";
import { useThemeColors } from "../constants/ThemeContext";
import { useTranslation } from "react-i18next";
import { useFontSize } from "../constants/FontSizeContext";
import fonts from "../utils/fonts";

const Stack = createNativeStackNavigator();

const adUnitId = __DEV__
  ? TestIds.APP_OPEN
  : "ca-app-pub-3810123126111899/5224055130";

let appOpenAd = AppOpenAd.createForAdRequest(adUnitId);

const StackNavigation = () => {
  const [initialRoute, setInitialRoute] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const { colors } = useThemeColors();
  const { fontScale } = useFontSize();

  const { t, i18n } = useTranslation();
  useEffect(() => {
    checkFirstLaunch();
    loadAd();
  }, []);

  const loadAd = () => {
    const unsubscribeLoaded = appOpenAd.addAdEventListener(
      AdEventType.LOADED,
      () => {
        appOpenAd.show();
      },
    );

    const unsubscribeClosed = appOpenAd.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        setShowPopup(true);
      },
    );

    const unsubscribeError = appOpenAd.addAdEventListener(
      AdEventType.ERROR,
      (error) => {
        console.log("AppOpen error:", error);
      },
    );

    appOpenAd.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
      unsubscribeError();
    };
  };

  const checkFirstLaunch = async () => {
    const hasLaunched = await AsyncStorage.getItem("hasLaunched");

    if (hasLaunched === null) {
      await AsyncStorage.setItem("hasLaunched", "true");
      setInitialRoute("Setting");
    } else {
      setInitialRoute("Home");
    }
  };

  if (!initialRoute) return null;

  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={initialRoute}
      >
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>

      <Modal isVisible={showPopup}>
        <View
          style={[
            styles.modalContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <Text
            style={[
              styles.title,
              { fontSize: 18 * fontScale, color: colors.text },
            ]}
          >
            {t("disclaimer")}
          </Text>

          <Text
            style={[
              styles.message,
              { fontSize: 14 * fontScale, color: colors.text },
            ]}
          >
            {t("model_one")}
          </Text>
          <Text
            style={[
              styles.message,
              { fontSize: 14 * fontScale, color: colors.text },
            ]}
          >
            {t("model_two")}
          </Text>

          <Pressable
            style={[styles.button, { backgroundColor: colors.primary }]}
            onPress={() => setShowPopup(false)}
          >
            <Text
              style={[
                styles.buttonText,
                { fontSize: 14 * fontScale, color: colors.background },
              ]}
            >
              {t("got_it")}
            </Text>
          </Pressable>
        </View>
      </Modal>
    </>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 12,
    alignItems: "center",
  },
  title: {
    marginBottom: 10,
    fontFamily: fonts.TIONS_BOLD,
  },
  message: {
    marginBottom: 20,
    fontFamily: fonts.OPTIT_TIMES_ROMAN,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 6,
  },
  buttonText: {
    fontFamily: fonts.TIONS_BOLD,
  },
});
