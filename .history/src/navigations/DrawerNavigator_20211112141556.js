import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";
import { HOME_NAVIGATOR } from "../constants/routeName";
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} drawerType="slide">
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
