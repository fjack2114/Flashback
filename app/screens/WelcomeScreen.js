import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";

import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppColors from "../config/AppColors";

function WelcomeScreen() {
  return (
    <AppScreen>
      <ImageBackground
        source={require("../assets/bigWelcomeScreen.jpg")}
        style={styles.background}
      >
        <View>
          <Text style={styles.title}>FLASHBACK</Text>
        </View>
        <View style={styles.button}>
          <AppButton title="Register" />
          <AppButton title="Login" buttonColor="light" color="white" />
        </View>
      </ImageBackground>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  button: {
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: 550,
    height: 125,
  },
  title: {
    color: AppColors.white,
    transform: [{ rotate: "-25deg" }],
    fontFamily: "MontserratAlternates",
    fontSize: 26,
  },
});

export default WelcomeScreen;
