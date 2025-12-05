import React, { ReactNode } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColors } from '../constants/ThemeContext';

interface ContainerProps {
  children?: ReactNode;
  container?: ViewStyle;
  subContainer?: ViewStyle;
}

const Container: React.FC<ContainerProps> = ({ children, subContainer }) => {
  const { theme, setTheme, colors } = useThemeColors();
  return (
    <SafeAreaView
      style={[
        style.container,
        subContainer,
        { backgroundColor: colors.background },
      ]}
    >
      {children}
    </SafeAreaView>
  );
};

export default Container;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
