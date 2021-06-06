import React from 'react';

import Signup from './src/screens/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Main from './src/screens/Main';
import Create from './src/screens/Create'
import Precreate from './src/screens/Precreate';
import Postcreate from './src/screens/Postcreate';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './src/redux/reducers';
import Tab from './src/screens/Tab';
import Dashboard from './src/screens/Dashboard'



const Stack = createStackNavigator();
const screens = [
  { name: "Main", component: Main },
  { name: "Login", component: Login },
  { name: "Signup", component: Signup },
  { name: "Home", component: Home },
  {name: "Create", component: Create},
  {name: "Precreate", component: Precreate},
  {name: "Postcreate", component: Postcreate},
 {name: "Dashboard", component: Dashboard},
  {name: "Tab", component: Tab},

 

  
];
const store = createStore(allReducers);

export default function App() {
return(
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screens[0].name} screenOptions={{ headerShown: false }}>
        {screens.map(({ name, component }) => <Stack.Screen key={name} name={name} component={component} />)}
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>

  );
}
 
