import React from 'react';
import SwitchNavigator from "./src/navigation/SwitchNavigator";
import PrimaryScreen from "./src/screens/PrimaryScreen";
import {NavigationContainer} from "@react-navigation/native";
import ProfileScreen from "./src/screens/ProfileScreen";
import {createStackNavigator} from "@react-navigation/stack";
import StudyGroupListScreen from './src/screens/StudyGroupListScreen'
import JoinScreen from "./src/screens/JoinScreen";
import CreateScreen from "./src/screens/CreateScreen";

import {Provider as StateProvider} from 'react-redux'
import store from './src/redux/store/store'
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import {rrfProps} from "./src/redux/store/store";
import HomeStack from "./src/navigation/HomeStack";
import UploadTestScreen from "./src/screens/UploadTestScreen";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
/*import Navigation from './navigation';*/


export default function App() {

    return (
/*        <StateProvider store = {store}>
            <ReactReduxFirebaseProvider {...rrfProps}>*/
        <HomeStack/>

/*            </ReactReduxFirebaseProvider>
        </StateProvider>*/
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



