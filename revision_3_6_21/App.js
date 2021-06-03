import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/HomeScreen";
import SignupScreen from "./src/screens/SignupScreen";
import LoginScreen from "./src/screens/LoginScreen";

const Stack = createStackNavigator();
export default function App() {
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
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/



