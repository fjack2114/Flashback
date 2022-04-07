import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppColors from "../config/AppColors";
import AppButton from "../components/AppButton";

function CreateScreen({ navigation }) {
  return (
    <AppScreen style={{ backgroundColor: AppColors.black }}>
      <View style={styles.container}>
        <AppTextInput
          icon="format-title"
          placeholder="Title"
          placeholderTextColor={AppColors.white}
          color="white"
        />
        <AppTextInput
          icon="calendar-range"
          placeholder="Date"
          placeholderTextColor={AppColors.white}
        />
        <AppTextInput
          icon="map-marker"
          placeholder="Location"
          placeholderTextColor={AppColors.white}
        />
        <AppTextInput
          icon="shape"
          placeholder="Category"
          placeholderTextColor={AppColors.white}
        />
      </View>
      <View>
        <MaterialCommunityIcons name="camera" size={45} style={styles.icon} />
      </View>
      <View style={styles.displayBox} />
      <View style={styles.button}>
        <AppButton
          title="Create"
          buttonColor="light"
          color="white"
          onPress={() => navigation.navigate("Info")}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    marginTop: 600,
    height: 125,
    position: "absolute",
  },
  container: {
    alignItems: "center",
    height: 200,
    position: "absolute",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 50,
  },
  displayBox: {
    marginTop: 75,
    width: 375,
    height: 125,
    backgroundColor: AppColors.white,
    borderRadius: 20,
    alignSelf: "center",
  },
  icon: {
    color: AppColors.white,
    marginTop: 275,
    alignSelf: "center",
  },
});

export default CreateScreen;
