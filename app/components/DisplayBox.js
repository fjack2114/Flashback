import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

function DisplayBox() {
  return (
    <View style={styles.topHalf}>
      <View style={styles.image}>
        <Image source={require("../assets/smallicon.jpg")} />
      </View>
      <View style={styles.textPositioning}>
        <AppText style={styles.text}>Sign Up</AppText>
      </View>
      <View style={styles.middle} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 40,
    alignSelf: "center",
    marginTop: 40,
  },
  middle: {
    width: 300,
    height: 400,
    backgroundColor: AppColors.white,
    alignSelf: "center",
    borderRadius: 45,
    position: "absolute",
    marginTop: 250,
  },
  topHalf: {
    width: "100%",
    height: 375,
    backgroundColor: AppColors.black,
    borderBottomRightRadius: 45,
    borderBottomLeftRadius: 45,
  },
  text: {
    alignSelf: "center",
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 32,
    color: AppColors.white,
  },
  textPositioning: {
    marginTop: 175,
    position: "absolute",
    alignSelf: "center",
  },
});

export default DisplayBox;
