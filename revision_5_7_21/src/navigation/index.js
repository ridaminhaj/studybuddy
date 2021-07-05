
import { NavigationContainer,  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View } from 'react-native';
import {Octicons, MaterialCommunityIcons} from "@expo/vector-icons";

import NotFoundScreen from '../screens/LoadingScreen';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';


export default function Navigation() {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor: 'white',
                shadowOpacity: 0,
                elevation: 0
            },
            headerTintColor: 'white',
            headerTitleAlign: 'left',
            headerTitleStyle: {
                fontWeight: 'bold',

            }
        }}>
            <Stack.Screen
                name="Root"
                component={MainTabNavigator}
                options = {{
                    title: "ChatGroup",
                    headerRight: ()=> (
                        <View style={{
                            flexDirection:'row',
                            width: 60,
                            justifyContent: 'space-between',
                            marginRight: 10
                        }}>
                            <Octicons name={"search"} size={22} color={"white"}/>
                            <MaterialCommunityIcons name={'dots-vertical'} size={22} color={"white"}/>
                        </View>
                    )
                }}
            />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </Stack.Navigator>
    );
}








/*
import React from 'react';
import { AuthProvider } from './AuthProvider';
import Routes from './Routes';

export default function Providers() {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}*/

