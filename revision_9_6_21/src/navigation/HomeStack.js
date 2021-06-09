import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import PrimaryScreen from "../screens/PrimaryScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SwitchNavigator from "./SwitchNavigator";

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main'>
                <Stack.Screen
                    name='Main'
                    options={{headerStyle: {backgroundColor: '#e6ddc5'}}}
                    component={PrimaryScreen}
                />
                <Stack.Screen
                    name='Profile'
                    component={ProfileScreen}
                    options={{headerStyle: {backgroundColor: '#e6ddc5'}}}
                />
                <Stack.Screen
                    name = 'Switch'
                    component = {SwitchNavigator}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default HomeStack;