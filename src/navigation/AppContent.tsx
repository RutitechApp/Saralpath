import React from "react";
import { StatusBar } from "react-native";
import { useThemeColors } from "../constants/ThemeContext";
import AppNavigation from "./AppNavigation";

const AppContent = () => {
  const { appliedTheme } = useThemeColors();
  return (
    <>
      <StatusBar
        barStyle={appliedTheme === "dark" ? "light-content" : "dark-content"}
        backgroundColor="transparent"
        translucent
      />
      <AppNavigation />
    </>
  );
};

export default AppContent;
