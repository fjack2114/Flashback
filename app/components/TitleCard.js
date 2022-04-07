import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppColors from "../config/AppColors";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function TitleCard({ name, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <AppText style={styles.text}>{name}</AppText>
      <MaterialCommunityIcons
        style={styles.options}
        name="dots-horizontal"
        size={45}
      />
      <MaterialCommunityIcons style={styles.sort} name="sort" size={32} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    width: 375,
    height: 125,
    borderRadius: 25,
    alignSelf: "center",
    marginTop: 25,
  },
  image: {
    alignSelf: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  options: {
    position: "absolute",
    padding: 5,
  },
  sort: {
    position: "absolute",
    alignSelf: "flex-end",
    padding: 10,
  },
  text: {
    alignSelf: "center",
    color: AppColors.black,
    fontSize: 20,
    fontFamily: "MontserratAlternates_400Regular",
  },
});

export default TitleCard;
