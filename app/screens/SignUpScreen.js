import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import DisplayBox from "../components/DisplayBox";

function SignUpScreen({ navigation }) {
  return (
    <AppScreen>
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <DisplayBox />
        <View style={styles.container}>
          <View style={styles.input}>
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
        </View>
      </KeyboardAwareScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  button: {
    top: 75,
  },
  container: {
    height: 230,
    alignItems: "center",
    bottom: 50,
  },
  input: {
    height: 155,
    justifyContent: "space-between",
  },
});

export default SignUpScreen;
