import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from "../screens/HomeScreen";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import PrimaryScreen from "../screens/PrimaryScreen";

const Stack = createStackNavigator();

class HomeStack extends React.Component {
    render() {
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
                    <Stack.Screen
                        name="Main"
                        component={PrimaryScreen}
                        options={{headerStyle: {backgroundColor: '#e6ddc5'}}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default createAppContainer(HomeStack);