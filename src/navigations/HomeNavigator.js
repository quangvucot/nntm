import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Setting from "../screens/Setting";
import { HOME, HOME_NAVIGATOR, SENSOR, SETTING } from "../constants/routeName";
import { Text } from "react-native";

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator
      initialRouteName={HOME}
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <HomeStack.Screen
        name={HOME}
        component={Home}
        options={{}}
      ></HomeStack.Screen>
      <HomeStack.Screen name={SETTING} component={Setting}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
