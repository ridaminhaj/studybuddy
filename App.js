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
import Join from './src/screens/Join';
import Webview from './src/screens/Webview';
import Profilepic from './src/screens/Profilepic';
import Coverpic from './src/screens/Coverpic';


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
  {name: "Join", component: Join},
  {name: "Webview", component: Webview},
  {name: 'Profilepic', component: Profilepic},
  {name: 'Coverpic', component: Coverpic},
  

  
  


 

  
];
const store = createStore(allReducers);

export default function App() {
return(
  <Provider store={store}>
    {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Hello World</Text></View> */}
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screens[0].name} screenOptions={{ headerShown: false }}>
        {screens.map(({ name, component }) => <Stack.Screen key={name} name={name} component={component} />)}
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>

  );
}
 
