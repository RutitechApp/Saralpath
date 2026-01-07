import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Container from "../components/Container";
import { Dropdown } from "react-native-element-dropdown";
import { appTheme, language } from "../constants/dummyData";
import Slider from "@react-native-community/slider";
import Button from "../components/Button";
import fonts from "../utils/fonts";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { horizontalScale, verticalScale } from "../constants/responsive";
import { useTranslation } from "react-i18next";
import { getAppLanguage, setAppLanguage } from "../i18n/ index";
import { useFontSize } from "../constants/FontSizeContext";
import { useThemeColors } from "../constants/ThemeContext";

const Setting = () => {
  const { t } = useTranslation();
  const { fontScale, setFontScale } = useFontSize();
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const navigation = useNavigation();
  const { theme, setTheme, colors } = useThemeColors();
  useEffect(() => {
    (async () => {
      const savedLang = await getAppLanguage();
      const found = language.find((l) => l.code === savedLang);
      if (found) setSelectedLanguage(found);
    })();
  }, []);
  const onLanguageChange = async (item) => {
    setSelectedLanguage(item);
    await setAppLanguage(item.code);
  };

  const ticks = [0.8, 0.95, 1.1, 1.25, 1.4, 1.5];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const nearest = ticks.reduce((prev, curr) =>
      Math.abs(curr - fontScale) < Math.abs(prev - fontScale) ? curr : prev
    );
    setActiveIndex(ticks.indexOf(nearest));
  }, [fontScale]);

  const decreaseFont = () => {
    if (activeIndex > 0) {
      const newScale = ticks[activeIndex - 1];
      setFontScale(newScale);
    }
  };

  const increaseFont = () => {
    if (activeIndex < ticks.length - 1) {
      const newScale = ticks[activeIndex + 1];
      setFontScale(newScale);
    }
  };
  console.log("theme", theme);
  return (
    <Container subContainer={styles.container}>
      <Text
        style={[
          styles.appSettingTextStyle,
          { fontSize: 20 * fontScale, color: colors.primary },
        ]}
      >
        {t("app_setting")}
      </Text>
      <Text
        style={[
          styles.textStyle,
          {
            marginTop: verticalScale(20),
            fontSize: 16 * fontScale,
            color: colors.primary,
          },
        ]}
      >
        {t("choose_language")}
      </Text>
      <Dropdown
        style={[styles.dropdown, { backgroundColor: colors.cardBg }]}
        data={language}
        labelField="language"
        valueField="code"
        placeholder={t("select_language")}
        value={selectedLanguage?.code}
        onChange={onLanguageChange}
        renderItem={(item) => (
          <View style={styles.item}>
            <Text style={{ fontSize: 16 * fontScale, color: colors.text }}>
              {item.language}
            </Text>
          </View>
        )}
        containerStyle={{
          backgroundColor: colors.cardBg,
          borderRadius: 10,
          overflow: "hidden",
        }}
        placeholderStyle={[
          styles.textStyle,
          { color: colors.primary, fontSize: 16 * fontScale },
        ]}
        selectedTextStyle={{
          fontSize: 16 * fontScale,
          color: colors.text,
        }}
        itemContainerStyle={{
          backgroundColor: colors.cardBg,
        }}
        activeColor={colors.wrapper}
      />

      <Text
        style={[
          styles.textStyle,
          {
            marginTop: verticalScale(20),
            color: colors.primary,
            fontSize: 16 * fontScale,
          },
        ]}
      >
        {t("font_size")}
      </Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.btn, { borderColor: colors.text }]}
          onPress={decreaseFont}
        >
          <Text style={[styles.btnText, { color: colors.text }]}>–</Text>
        </TouchableOpacity>

        <View style={{ flex: 1 }}>
          <Slider
            minimumValue={ticks[0]}
            maximumValue={ticks[ticks.length - 1]}
            step={0.01}
            value={fontScale}
            minimumTrackTintColor={colors.primary}
            maximumTrackTintColor={"grey"}
            thumbTintColor={colors.primary}
            onValueChange={(value) => setFontScale(value)}
          />
        </View>

        <TouchableOpacity
          style={[styles.btn, { borderColor: colors.text }]}
          onPress={increaseFont}
        >
          <Text style={[styles.btnText, { color: colors.text }]}>+</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={[
          styles.textStyle,
          {
            color: colors.primary,
            fontSize: 16 * fontScale,
            marginTop: verticalScale(20),
          },
        ]}
      >
        {t("app_theme")}
      </Text>
      <Dropdown
        style={[styles.dropdown, { backgroundColor: colors.cardBg }]}
        data={appTheme}
        labelField="label"
        valueField="title"
        value={theme}
        placeholder={"Select Theme"}
        onChange={(item) => setTheme(item.title)}
        renderItem={(item) => (
          <View style={styles.item}>
            <Text style={{ fontSize: 16 * fontScale, color: colors.text }}>
              {item.label}
            </Text>
          </View>
        )}
        placeholderStyle={[
          styles.textStyle,
          { color: colors.primary, fontSize: 16 * fontScale },
        ]}
        selectedTextStyle={{
          fontSize: 16 * fontScale,
          color: colors.text,
        }}
        containerStyle={{
          backgroundColor: colors.cardBg,
          borderRadius: 10,
          overflow: "hidden",
        }}
        itemContainerStyle={{
          backgroundColor: colors.cardBg,
        }}
        activeColor={colors.wrapper}
      />
      <Button
        title={t("continue_btn")}
        btnStyle={styles.btnStyle}
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: "Home" }],
            })
          );
        }}
      />
    </Container>
  );
};

export default Setting;

const styles = StyleSheet.create({
  dropdown: {
    height: verticalScale(50),
    borderRadius: 8,
    paddingHorizontal: horizontalScale(12),
    marginTop: verticalScale(10),
  },
  item: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(12),
    fontFamily: fonts.TIONS_REGULAR,
  },

  textStyle: {
    fontWeight: "500",
  },
  rowViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: verticalScale(20),
  },
  appSettingTextStyle: {
    textAlign: "center",
    fontWeight: "700",
  },
  container: {
    paddingHorizontal: horizontalScale(24),
    paddingTop: verticalScale(20),
  },
  btnStyle: {
    position: "absolute",
    bottom: verticalScale(50),
    width: "100%",
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(10),
  },
  btn: {
    width: horizontalScale(30),
    height: horizontalScale(30),
    borderRadius: 5,
    borderWidth: 1.8,
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -2,
  },
  tickContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: horizontalScale(12),
    marginTop: -12,
  },
});
