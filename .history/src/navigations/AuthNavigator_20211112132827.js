import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/Login";
import Register from "../screens/Register";


const AuthNavigator = () => {
    const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Đăng nhập" component={SignIn} />
      <AuthStack.Screen name="Đăng ký" component={Register} />
    </AuthStack.Navigator>
  );
};
