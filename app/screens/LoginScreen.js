import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import DisplayBoxLogin from "../components/DisplayBoxLogin";

function LoginScreen({ navigation }) {
  return (
    <AppScreen>
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <DisplayBoxLogin title="Login" color="white" />

        <View style={styles.container}>
          <View style={styles.input}>
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
              title="Login   "
              buttonColor="black"
              color="white"
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  button: {
    top: 80,
  },
  container: {
    height: 230,
    alignItems: "center",
  },
  input: {
    top: 30,
    justifyContent: "space-between",
    height: 100,
  },
});

export default LoginScreen;
