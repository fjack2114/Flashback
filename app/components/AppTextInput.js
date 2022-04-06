import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";

function AppTextInput({ icon, textInput, ...otherProps }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={22} />
      <TextInput style={styles.placeholderText} {...otherProps}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: AppColors.light,
    width: 225,
    height: 35,
    padding: 5,
  },
  placeholderText: {
    fontFamily: "Montserrat_200ExtraLight",
    fontSize: 16,
    marginLeft: 15,
  },
});

export default AppTextInput;
