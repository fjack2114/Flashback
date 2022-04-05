import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

function AppButton({ title, buttonColor = "white", color = "light" }) {
  return (
    <TouchableOpacity>
      <View
        style={[styles.button, { backgroundColor: AppColors[buttonColor] }]}
      >
        <Text style={[styles.text, { color: AppColors[color] }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 175,
    height: 50,
    borderRadius: 45,
    backgroundColor: AppColors.light,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "MontserratAlternates",
    color: AppColors.white,
  },
});

export default AppButton;
