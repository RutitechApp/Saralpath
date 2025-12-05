import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ArrowForward, GridDoc } from '../assets/svgs/Home';
import { horizontalScale, verticalScale } from '../constants/responsive';
import { useTranslation } from 'react-i18next';
import { useFontSize } from '../constants/FontSizeContext';
import { useThemeColors } from '../constants/ThemeContext';

interface GridCardProps {
  data?: any;
  onPress?: () => void;
}

const GridCard: React.FC<GridCardProps> = ({ data, onPress }) => {
  const { t } = useTranslation();
  const { fontScale } = useFontSize();
  const { colors } = useThemeColors();
  return (
    <Pressable
      style={[styles.viewStyle, { backgroundColor: colors.cardBg }]}
      onPress={onPress}
    >
      <View style={[styles.imageStyle, { backgroundColor: colors.imageBg }]}>
        <GridDoc width={85} height={62} />
      </View>
      <View style={styles.vStyle}>
        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.textStyle,
              { fontSize: 14 * fontScale, color: colors.text },
            ]}
            numberOfLines={2}
          >
            {t(data.title)}
          </Text>
        </View>
        <Pressable
          style={[styles.iconViewStyle, { backgroundColor: colors.imageBg }]}
        >
          <ArrowForward
            width={horizontalScale(10)}
            height={horizontalScale(10)}
          />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default GridCard;

const styles = StyleSheet.create({
  viewStyle: {
    borderRadius: 15,
    alignItems: 'center',
    padding: horizontalScale(13),
    marginTop: verticalScale(15),
  },
  vStyle: {
    marginTop: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  textStyle: {
    maxWidth: horizontalScale(90),
    fontWeight: '600',
  },
  imageStyle: {
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(24),
    borderRadius: 10,
  },
  iconViewStyle: {
    height: verticalScale(24),
    width: verticalScale(24),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
});
