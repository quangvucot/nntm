import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="HomeNavigator"
        component={HomeNavigator}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
