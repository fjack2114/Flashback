import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppColors from "../config/AppColors";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

function TitleCard({ name, image }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.options}>
          <MaterialCommunityIcons name="dots-horizontal" size={45} />
        </View>
      </TouchableOpacity>
      <View>
        <Image source={image} style={styles.image} />
        <AppText style={styles.text}>{name}</AppText>
      </View>
      <TouchableOpacity>
        <View style={styles.sort}>
          <MaterialCommunityIcons name="sort" size={30} />
        </View>
      </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  image: {
    alignSelf: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  options: {
    alignSelf: "flex-start",
    padding: 5,
  },
  sort: {
    alignSelf: "flex-end",
    padding: 8,
  },
  text: {
    alignSelf: "center",
    color: AppColors.black,
    fontSize: 20,
    fontFamily: "MontserratAlternates_400Regular",
  },
});

export default TitleCard;
