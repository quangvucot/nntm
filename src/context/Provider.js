import React, { createContext, useReducer } from "react";
import { } from 'react-native';
import AuthInitialState from "../context/initialStates/authInitialState";
import farmInitialState from "./initialStates/farmInitialState";
export const GlobalContext = createContext({});
import auth from "./reduces/auth";
import farm from "./reduces/farm";
const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, AuthInitialState);
    const [farmState, farmDispatch] = useReducer(farm, farmInitialState);
    return (
        <GlobalContext.Provider value={{ authState, authDispatch, farmState, farmDispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider;