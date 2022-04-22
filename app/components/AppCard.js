import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

function AppCard({ title, category, date, location, image }) {
  return (
    <View style={styles.container}>
      {isFinite(image) ? (
        <Image source={image} style={styles.image} />
      ) : (
        <Image source={{ uri: image.path }} style={styles.image} />
      )}
      <AppText style={styles.text}>
        {title} - {category}
      </AppText>
      <AppText style={styles.text}>
        {date} - {location}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    width: 350,
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
    width: 350,
    height: 125,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  text: {
    color: AppColors.black,
    fontFamily: "Montserrat_400Regular",
    fontSize: 9,
    marginLeft: 20,
  },
});

export default AppCard;
