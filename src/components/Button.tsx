import React from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useFontSize } from '../constants/FontSizeContext';
import { useThemeColors } from '../constants/ThemeContext';

interface ButtonProps {
  title?: string;
  btnStyle?: ViewStyle;
  btnTextStyle?: TextStyle;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  btnStyle,
  btnTextStyle,
  onPress,
}) => {
  const { theme, setTheme, colors } = useThemeColors();
  const { fontScale } = useFontSize();
  return (
    <Pressable
      style={[styles.btnStyle, btnStyle, { backgroundColor: colors.primary }]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.btnTextStyle,
          btnTextStyle,
          { fontSize: 16 * fontScale, color: colors.background },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 15,
  },
  btnTextStyle: {
    fontWeight: '600',
  },
});
