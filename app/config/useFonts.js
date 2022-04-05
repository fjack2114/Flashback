import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    MontserratBlack: require("../assets/fonts/Montserrat-Black.ttf"),
    MontserratLight: require("../assets/fonts/Montserrat-Light.ttf"),
    MontserratRegular: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratAlternates: require("../assets/fonts/MontserratAlternates-Bold.ttf"),
  });
