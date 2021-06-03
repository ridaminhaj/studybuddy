import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();
export default function HomeStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    options={{headerStyle: {backgroundColor: '#e6ddc5'}}}
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignupScreen}
                    options={{headerStyle: {backgroundColor: '#e6ddc5'}}}
                />
                <Stack.Screen
                    name="LogIn"
                    component={LoginScreen}
                    options={{headerStyle: {backgroundColor: '#e6ddc5'}}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}