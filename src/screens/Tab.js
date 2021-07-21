
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Chat from './Chat';
import Details from './Details';
import Upload from './Upload'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HeaderTitle } from 'react-navigation-stack';



const Tab = createMaterialTopTabNavigator();

export default Tabs = ({navigation, route}) => {
    return (
  
<Tab.Navigator screenOptions = {{headerShown: true}}  style = {{marginTop: StatusBar.currentHeight? StatusBar.currentHeight : 0}}
tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: 'grey',
        labelStyle: { fontSize: 13 },
        
        
      }}  >
<Tab.Screen name= "Details" component= {Details} initialParams={{post: route?.params?.post}}
          />
<Tab.Screen name="Chat" component={Chat} initialParams = {{post: route?.params?.post}} />

<Tab.Screen name="Upload" component={Upload} initialParams = {{post: route?.params?.post}} />

</Tab.Navigator>


    )
}
