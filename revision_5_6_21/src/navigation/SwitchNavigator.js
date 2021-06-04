import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import PrimaryScreen from "../screens/PrimaryScreen";

const SwitchNavigator = createSwitchNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Login: {
            screen: LoginScreen
        },
        Signup: {
            screen: SignupScreen
        },
        Main: {
            screen: PrimaryScreen
        }
    },
    {
        initialRouteName: 'Home'
    }
)

export default createAppContainer(SwitchNavigator)