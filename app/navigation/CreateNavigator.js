import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CreateScreen from "../screens/CreateScreen";
import MoreInfoScreen from "../screens/MoreInfoScreen";

const AppStack = createStackNavigator();

const CreateNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="PictureScreen"
      component={CreateScreen}
      options={{ headerShown: false, lazy: false, unmountOnBlur: true }}
    />
    <AppStack.Screen
      name="Info"
      component={MoreInfoScreen}
      options={{ unmountOnBlur: true, headerShown: false }}
    />
  </AppStack.Navigator>
);

export default CreateNavigator;
