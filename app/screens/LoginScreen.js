import React from "react";
import { StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import DisplayBoxLogin from "../components/DisplayBoxLogin";

function LoginScreen(props) {
  return (
    <AppScreen>
      <DisplayBoxLogin title="Login" color="white" />
      <View style={styles.container}>
        <View style={styles.filler} />
        <AppTextInput
          icon="email"
          placeholder="Email   "
          placeholderTextColor={AppColors.white}
        />
        <AppTextInput
          icon="lock"
          placeholder="Password   "
          placeholderTextColor={AppColors.white}
        />
      </View>
      <View style={styles.button}>
        <AppButton title="Login   " buttonColor="black" color="white" />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    marginTop: 550,
    height: 125,
    position: "absolute",
  },
  filler: {
    height: 35,
    width: 225,
  },
  container: {
    alignItems: "center",
    height: 150,
    position: "absolute",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 325,
  },
});

export default LoginScreen;
