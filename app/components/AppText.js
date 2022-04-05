import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import AppColors from "../config/AppColors";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import useFonts from "../config/useFonts";

function AppText({ children, color = "dark" }) {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <Text style={[styles.text, { color: AppColors[color] }]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "MontserratAlternates",
    color: AppColors.white,
  },
});

export default AppText;
