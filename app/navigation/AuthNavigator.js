import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import TabNavigator from "./TabNavigator";
import WelcomeScreen from "../screens/WelcomeScreen";

const AppStack = createStackNavigator();

const AuthNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Register"
      component={SignUpScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Home"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);

export default AuthNavigator;
