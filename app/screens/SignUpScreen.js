import React from "react";
import reactDom from "react-dom";
import { View, StyleSheet, TextInput } from "react-native";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import DisplayBox from "../components/DisplayBox";

function SignUpScreen({ navigation }) {
  return (
    <AppScreen>
      <DisplayBox style={styles.background}></DisplayBox>
      <View style={styles.container}>
        <AppTextInput
          icon="account"
          placeholder="Full Name   "
          placeholderTextColor={AppColors.white}
        />
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
        <AppButton
          title="Sign Up"
          buttonColor="black"
          color="white"
          onPress={() => navigation.navigate("Login")}
        />
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
  container: {
    alignItems: "center",
    height: 150,
    position: "absolute",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 325,
  },
});

export default SignUpScreen;
