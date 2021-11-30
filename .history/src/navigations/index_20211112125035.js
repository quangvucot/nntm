import React from "react";
import {} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
const AppNavContainer = () => {
  return (
    <>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
};
export default AppNavContainer;
