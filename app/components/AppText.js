import React from "react";

import { Text } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  MontserratAlternates_100Thin,
  MontserratAlternates_100Thin_Italic,
  MontserratAlternates_200ExtraLight,
  MontserratAlternates_200ExtraLight_Italic,
  MontserratAlternates_300Light,
  MontserratAlternates_300Light_Italic,
  MontserratAlternates_400Regular,
  MontserratAlternates_400Regular_Italic,
  MontserratAlternates_500Medium,
  MontserratAlternates_500Medium_Italic,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_600SemiBold_Italic,
  MontserratAlternates_700Bold,
  MontserratAlternates_700Bold_Italic,
  MontserratAlternates_800ExtraBold,
  MontserratAlternates_800ExtraBold_Italic,
  MontserratAlternates_900Black,
  MontserratAlternates_900Black_Italic,
} from "@expo-google-fonts/montserrat-alternates";

import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from "@expo-google-fonts/montserrat";

function AppText({ children, ...otherProps }) {
  let [fontsLoaded] = useFonts({
    MontserratAlternates_100Thin,
    MontserratAlternates_100Thin_Italic,
    MontserratAlternates_200ExtraLight,
    MontserratAlternates_200ExtraLight_Italic,
    MontserratAlternates_300Light,
    MontserratAlternates_300Light_Italic,
    MontserratAlternates_400Regular,
    MontserratAlternates_400Regular_Italic,
    MontserratAlternates_500Medium,
    MontserratAlternates_500Medium_Italic,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_600SemiBold_Italic,
    MontserratAlternates_700Bold,
    MontserratAlternates_700Bold_Italic,
    MontserratAlternates_800ExtraBold,
    MontserratAlternates_800ExtraBold_Italic,
    MontserratAlternates_900Black,
    MontserratAlternates_900Black_Italic,
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Text {...otherProps}>{children}</Text>;
  }
}
export default AppText;
