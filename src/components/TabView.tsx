import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../constants/responsive";
import { useTranslation } from "react-i18next";
import { useThemeColors } from "../constants/ThemeContext";
import { useFontSize } from "../constants/FontSizeContext";

interface TabViewData {
  id?: number;
  title?: string;
}

interface TabViewProps {
  activeIndex?: number;
  tabData?: TabViewData[];
  onPress?: (index: number) => void;
}

const TabView: React.FC<TabViewProps> = ({
  tabData = [],
  activeIndex,
  onPress,
}) => {
  const { t } = useTranslation();
  const { colors } = useThemeColors();
  const { fontScale } = useFontSize();
  return (
    <View style={styles.viewStyle}>
      {tabData?.map((item, _index) => {
        return (
          <Pressable
            key={_index}
            onPress={() => onPress?.(_index)}
            style={{
              backgroundColor:
                activeIndex === _index ? colors.primary : colors.imageBg,
              width: horizontalScale(100),
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: verticalScale(5),
            }}
          >
            <Text
              style={[
                {
                  color: colors.text,
                  fontSize: 14 * fontScale,
                },
                styles.textStyle,
              ]}
            >
              {t(item?.title)}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabView;

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: horizontalScale(10),
    marginTop: verticalScale(20),
  },
  subViewStyle: {
    flexDirection: "row",
    paddingVertical: verticalScale(7),
    paddingHorizontal: horizontalScale(15),
    borderRadius: horizontalScale(8),
  },
  textStyle: {
    marginLeft: horizontalScale(4),
    textAlign: "center",
  },
});
