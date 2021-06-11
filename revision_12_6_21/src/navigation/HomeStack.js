import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import PrimaryScreen from "../screens/PrimaryScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SwitchNavigator from "./SwitchNavigator";
import StudyGroupListScreen from "../screens/StudyGroupListScreen";
import JoinScreen from "../screens/JoinScreen";
import CreateScreen from "../screens/CreateScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main'>
                <Stack.Screen
                    name='Home'
                    options={{headerStyle: {backgroundColor: '#e6ddc5'}}}
                    component={HomeScreen}
                />
                <Stack.Screen
                    name='Login'
                    options={{headerStyle: {backgroundColor: '#e6ddc5'}}}
                    component={LoginScreen}
                />
                <Stack.Screen
                    name='Signup'
                    options={{headerStyle: {backgroundColor: '#e6ddc5'}}}
                    component={SignupScreen}
                />
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
                    name='List'
                    component={StudyGroupListScreen}
                    options={{headerStyle: {backgroundColor: '#e6ddc5'}}}
                />
                <Stack.Screen
                    name='Join'
                    component={JoinScreen}
                    options={{headerStyle: {backgroundColor: '#e6ddc5'}}}
                />
                <Stack.Screen
                    name='Create'
                    component={CreateScreen}
                    options={{headerStyle: {backgroundColor: '#e6ddc5'}}}
                />
                {/*<Stack.Screen
                    name='Switch'
                    component={SwitchNavigator}
                />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default HomeStack;