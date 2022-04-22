import React from "react";
import { Text } from "react-native";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  MontserratAlternates_400Regular,
  MontserratAlternates_600SemiBold,
} from "@expo-google-fonts/montserrat-alternates";

import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

function AppText({ children, ...otherProps }) {
  let [fontsLoaded] = useFonts({
    MontserratAlternates_400Regular,
    MontserratAlternates_600SemiBold,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Text {...otherProps}>{children}</Text>;
  }
}
export default AppText;
