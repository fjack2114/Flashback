import React, { useState } from "react";
import { Modal, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import AppButton from "./AppButton";
import AppColors from "../config/AppColors";
import AppScreen from "./AppScreen";
import AppText from "./AppText";

function TitleCard({ name, image }) {
  const [logout, setLogout] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setLogout(true)}>
        <View style={styles.options}>
          <MaterialCommunityIcons name="dots-horizontal" size={45} />
        </View>
      </TouchableOpacity>
      <Modal visible={logout} animationType="slide" statusBarTranslucent={true}>
        <AppScreen>
          <View style={styles.buttons}>
            <AppButton
              title="Logout"
              buttonColor="black"
              color="white"
              onPress={() => navigation.popToTop()}
            />
            <AppButton
              title="Go Back"
              buttonColor="black"
              color="white"
              onPress={() => setLogout(false)}
            />
          </View>
        </AppScreen>
      </Modal>
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
  buttons: {
    height: 150,
    width: 200,
    top: 300,
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  container: {
    backgroundColor: AppColors.white,
    width: 350,
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
