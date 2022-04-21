import React from "react";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import CreateScreen from "./app/screens/CreateScreen";
import TabNavigator from "./app/navigation/TabNavigator";
import DatePickerModal from "./app/components/DatePickerModal";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
