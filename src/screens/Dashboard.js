
import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import {IconButton} from 'react-native-paper';





export default Dashboard = ({navigation})=> {
    return (
      <SafeAreaView style = {styles.container}>
          
            <Text>Hello</Text>
      </SafeAreaView>


    )
}

const styles = StyleSheet.create(
    {container: {
       paddingTop: StatusBar.currentHeight? StatusBar.currentHeight : 0,
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
       },
    })