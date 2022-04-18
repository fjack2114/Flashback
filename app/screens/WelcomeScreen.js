import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";

function WelcomeScreen({ navigation }) {
  return (
    <AppScreen>
      <ImageBackground
        source={require("../assets/bigWelcomeScreen.jpg")}
        style={styles.background}
      >
        <View>
          <AppText style={styles.title}>FLASHBACK</AppText>
        </View>
        <View style={styles.button}>
          <AppButton
            title="Register"
            color="black"
            onPress={() => navigation.navigate("Register")}
          />
          <AppButton
            title="Login"
            buttonColor="light"
            color="white"
            onPress={() => navigation.navigate("Login")}
          />
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
    marginTop: 525,
    height: 125,
  },
  title: {
    color: AppColors.white,
    transform: [{ rotate: "-25deg" }],
    fontFamily: "MontserratAlternates_600SemiBold",
    fontSize: 28,
  },
});

export default WelcomeScreen;
