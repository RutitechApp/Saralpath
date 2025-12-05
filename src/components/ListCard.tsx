import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../constants/responsive";
import { ArrowForward, GridDoc } from "../assets/svgs/Home";
import { useFontSize } from "../constants/FontSizeContext";
import { useThemeColors } from "../constants/ThemeContext";
import { useTranslation } from "react-i18next";

interface ListCardProps {
  data?: any;
  onPress?: () => void;
}

const ListCard: React.FC<ListCardProps> = ({ data, onPress }) => {
  const { fontScale } = useFontSize();
  const { colors } = useThemeColors();
  const { t } = useTranslation();
  return (
    <Pressable
      style={[styles.viewStyle, { backgroundColor: colors.cardBg }]}
      onPress={onPress}
    >
      <GridDoc width={horizontalScale(37)} height={verticalScale(27)} />
      <Text
        style={[
          styles.textStyle,
          { fontSize: 14 * fontScale, color: colors.text },
        ]}
      >
        {t(data?.title)}
      </Text>
      <Pressable
        style={{
          height: verticalScale(24),
          width: verticalScale(24),
          backgroundColor: colors.imageBg,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
        }}
      >
        <ArrowForward
          width={horizontalScale(10)}
          height={horizontalScale(10)}
        />
      </Pressable>
    </Pressable>
  );
};

export default ListCard;
const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginTop: verticalScale(15),
    borderRadius: 15,
  },
  textStyle: {
    flex: 1,
    marginHorizontal: 15,
    fontWeight: "600",
  },
});
