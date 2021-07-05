/*

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ChatScreen from '../screens/ChatScreen'
import UploadTestScreen from '../screens/UploadTestScreen'

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={ChatScreen} />
                <Tab.Screen name="Settings" component={UploadTestScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}




























/!**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 *!/
/!*

import {Fontisto, Ionicons} from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import ChatScreen from '../screens/ChatScreen';
import UploadTestScreen from '../screens/UploadTestScreen';
/!*import { MainTabParamList, TabOneParamList, TabTwoParamList } from '../types';*!/

const MainTab = createMaterialTopTabNavigator();

export default function MainTabNavigator() {

    return (
        <MainTab.Navigator
            initialRouteName="Chats"
            tabBarOptions={{
                activeTintColor: 'grey',
                style: {
                    backgroundColor: 'white'
                },
                indicatorStyle: {
                    backgroundColor: 'grey',
                    height: 4
                },
                labelStyle: {
                    fontWeight: 'bold'
                },
                showIcon: true
            }}>
            <MainTab.Screen
                name="Chats"
                component={TabOneNavigator}
            />
            <MainTab.Screen
                name="UploadTestScreen"
                component={TabTwoNavigator}
            />

        </MainTab.Navigator>
    );
}
*!/

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
/!*function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}*!/

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={ChatScreen}
                options={{ headerTitle: 'Tab One Title' }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={UploadTestScreen}
                options={{ headerTitle: 'Tab Two Title' }}
            />
        </TabTwoStack.Navigator>
    );
}
*/
