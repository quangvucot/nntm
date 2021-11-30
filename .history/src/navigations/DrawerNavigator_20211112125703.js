import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Sensor from "../screens/Sensor";
import Setting from "../screens/Setting";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeNavigator"
        component={HomeNavigator}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
