
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Chat from './Chat';
import Details from './Details';
import Upload from './Upload'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Tab = createMaterialTopTabNavigator();

export default Tabs = ({navigation}) => {
    return (
  
<Tab.Navigator   style = {{marginTop: StatusBar.currentHeight? StatusBar.currentHeight : 0}}
tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: 'grey',
        labelStyle: { fontSize: 13 },
        
        
      }} title = 'hello' >
<Tab.Screen name= "Details" component= {Details} 
          />
<Tab.Screen name="Chat" component={Chat} />
<Tab.Screen name="Upload" component={Upload} />
</Tab.Navigator>


    )
}
