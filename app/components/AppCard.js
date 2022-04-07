import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppColors from "../config/AppColors";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppCard({ title, category, date, location, favourite, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <AppText style={styles.text}>
        {title} - {category}
      </AppText>
      <AppText style={styles.text}>
        {date} - {location}
      </AppText>
      <MaterialCommunityIcons name="heart" size={20} style={styles.heart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    width: 375,
    height: 150,
    borderRadius: 25,
    alignSelf: "center",
    marginTop: 25,
  },
  heart: {
    alignSelf: "flex-end",
    right: 12,
    position: "absolute",
    marginTop: 128,
  },
  image: {
    width: 375,
    height: 125,
    borderRadius: 25,
  },
  text: {
    color: AppColors.black,
    fontFamily: "Montserrat_400Regular",
    fontSize: 9,
    marginLeft: 20,
  },
});

export default AppCard;
