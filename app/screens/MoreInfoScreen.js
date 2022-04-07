import React from "react";
import { StyleSheet, View } from "react-native";

import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";

function MoreInfoScreen(props) {
  return (
    <AppScreen style={{ backgroundColor: AppColors.black }}>
      <View style={styles.previewBox} />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  previewBox: {
    backgroundColor: AppColors.white,
    width: 375,
    height: 250,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 50,
  },
});

export default MoreInfoScreen;
