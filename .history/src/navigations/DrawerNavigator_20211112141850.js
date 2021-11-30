import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./HomeNavigator";
import { HOME_NAVIGATOR } from "../constants/routeName";
const NavItem = ({ navigation }) => {};
const getDrawerNavigator = (navigation) => {
  return <NavItem navigation={navigation} />;
};
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerType="slide"
      drawerContent={({ navigation }) => {
        getDrawerNavigator(navigator);
      }}
    >
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
