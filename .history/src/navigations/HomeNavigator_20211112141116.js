import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Sensor from "../screens/Sensor";
import Setting from "../screens/Setting";
import { HOME_NAVIGATOR, SENSOR, SETTING } from "../constants/routeName";
import { Text } from "react-native";

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator
      initialRouteName={SENSOR}
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <HomeStack.Screen
        name={SENSOR}
        component={Sensor}
        options={{ headerLeft: () => <Text style={{ padding: 10 }}>NAV</Text> }}
      ></HomeStack.Screen>
      <HomeStack.Screen name={SETTING} component={Setting}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
