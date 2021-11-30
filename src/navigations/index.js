import React, { useContext, useState, useEffect } from "react";
import { } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import AuthNavigator from "./AuthNavigator";
import { GlobalContext } from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import navigationRef from './SlideMenu/RootNaivgator';
import { ActivityIndicator } from 'react-native';


const AppNavContainer = () => {
  const {
    authState: { isLoggedIn },
  } = useContext(GlobalContext);
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = React.useState(false);
  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      const uuid = await AsyncStorage.getItem('uuid');
      console.log("user", user);
      console.log("uuid", uuid);
      if (user) {
        setAuthLoaded(true);
        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);
        setIsAuthenticated(false);
      }
    } catch (err) { }
  };
  useEffect(() => {
    getUser();
  }, [isLoggedIn]);
  console.log('isLoggedIn:>>', isLoggedIn);
  console.log('isAuthenticated:>>', isAuthenticated);
  return (
    <>
      {authLoaded ? (
        <NavigationContainer ref={navigationRef}>
          {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};
export default AppNavContainer;
