import React from 'react';
import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './src/redux/reducers';
import SwitchNavigator from "./src/navigation/SwitchNavigator";
import PrimaryScreen from "./src/screens/PrimaryScreen";
import {NavigationContainer} from "@react-navigation/native";
import ProfileScreen from "./src/screens/ProfileScreen";
import {createStackNavigator} from "@react-navigation/stack";
import StudyGroupListScreen from './src/screens/StudyGroupListScreen'
import JoinScreen from "./src/screens/JoinScreen";
import CreateScreen from "./src/screens/CreateScreen";

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

const Stack = createStackNavigator();
import {connect} from 'react-redux';

export default function App() {
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
        /*<Provider store = {store}>
            <SwitchNavigator/>
        </Provider>*/
    );
}

/*export default connect((state) => {
    return {
        ui: state.ui
    }
})(App);*/

//this made a redux store
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/



