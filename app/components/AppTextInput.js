import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";

function AppTextInput({ icon, textInput, ...otherProps }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={22} style={styles.icon} />
      <TextInput style={styles.placeholderText} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: AppColors.light,
    width: 225,
    height: 35,
  },
  icon: {
    marginLeft: 3,
    marginTop: 8,
  },
  placeholderText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    marginLeft: 5,
    flex: 1,
    color: AppColors.white,
  },
});

export default AppTextInput;
