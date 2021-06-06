
import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {IconButton} from 'react-native-paper'






export default Upload = ({navigation}) => {
    return (
      <SafeAreaView style = {styles.container}>
             <IconButton style = {{marginTop: 400}} icon = 'file-upload' size = {60} color = 'red' 
            
            ></IconButton>
      </SafeAreaView>


    )
}

const styles = StyleSheet.create(
    {container: {
       paddingTop: StatusBar.currentHeight? StatusBar.currentHeight : 0,
       flexDirection: 'column',
       justifyContent: 'space-between',
       alignItems: 'center',
       },
    })