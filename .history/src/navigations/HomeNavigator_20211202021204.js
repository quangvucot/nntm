import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Setting from "../screens/Setting";
import FarmDetail from "../screens/FarmDetails";
import {
  CONTROLLER,
  DEVICE,
  FARM_DETAIL,
  HOME,
  HOME_NAVIGATOR,
  SENSOR,
  SETTING,
} from "../constants/routeName";
import { Text } from "react-native";
import Device from "../screens/Device";
import Controller from "../screens/Controller";

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator
      initialRouteName={HOME}
      screenOptions={{ headerTitleAlign: "center", headerShown: false }}
    >
      <HomeStack.Screen name={HOME} component={Home}></HomeStack.Screen>
      <HomeStack.Screen name={SETTING} component={Setting}></HomeStack.Screen>
      <HomeStack.Screen
        name={FARM_DETAIL}
        component={FarmDetail}
      ></HomeStack.Screen>
      <HomeStack.Screen name={DEVICE} component={Device}></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTROLLER}
        component={Controller}
      ></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
