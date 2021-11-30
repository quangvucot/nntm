import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Sensor from "../screens/Sensor";
import Setting from "../screens/Setting";

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator
      initialRouteName="Sensor"
      screenOptions={{ headerTitleAlign: "center", headerShown: false }}
    >
      <HomeStack.Screen name="Sensor"  options={{ title: 'My home' }} component={Sensor}></HomeStack.Screen>
      <HomeStack.Screen name="Setting" component={Setting}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
