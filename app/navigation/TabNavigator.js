import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "../screens/AccountScreen";
import CreateNavigator from "./CreateNavigator";

const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
  <AppTab.Navigator screenOptions={{ tabBarHideOnKeyboard: true }}>
    <AppTab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        headerShown: false,
        //   unmountOnBlur: true,
        tabBarIcon: () => (
          <MaterialCommunityIcons size={30} name="account-box" />
        ),
      }}
    />
    <AppTab.Screen
      name="New Memory"
      component={CreateNavigator}
      options={{
        unmountOnBlur: true,
        headerShown: false,
        tabBarIcon: () => (
          <MaterialCommunityIcons size={30} name="play-speed" />
        ),
      }}
    />
  </AppTab.Navigator>
);

export default TabNavigator;
