import React from 'react';
import {
  StatusBar,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {Button} from "react-native-paper";
import * as Authentication from './../../api/auth';
import Colors from '../constants/Colors'
import Graphics from './../graphics/Graphics'

export default Home = ({navigation, route}) => {
  const username = Authentication.getCurrentUserName();

  return (
    <SafeAreaView style = {styles.container} > 
      <Image resizeMode='contain' 
             style ={styles.image} 
             source={{uri: Graphics.logo_URL}}/>
      <Text style = {styles.welcome}>Welcome! {'\n'} {username} </Text>
     
      <Button 
      style = {styles.button} 
      mode = "outlined" 
      labelStyle = {styles.buttontext} 
      icon = "clipboard-text"
      compact = {true}
      onPress = {() => navigation.navigate("Dashboard")}
      >
      Your group list
      </Button>
      
      <Button 
      style = {styles.button} 
      mode = "outlined" 
      compact = {true}
      labelStyle = {styles.buttontext} 
      icon = "cast-education">
      Join a study group
      </Button>
      
      <Button 
      style = {styles.button} 
      mode = "outlined" 
      labelStyle = {styles.buttontext} 
      icon = "plus"
      compact = {true}
      onPress = {() =>{ navigation.navigate("Precreate")}}>
      Create a study group
      </Button>
    
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: StatusBar.currentHeight? StatusBar.currentHeight : 0,
    alignItems: 'center'
  },
  image:{
    width:200,
    height:200
  },
  welcome:{
    fontSize:30,
    textAlign:'center',
    marginBottom:30
  },
  button:{
    width:300,
    height:50,
    marginBottom:50,
    justifyContent:'center'
  },
  buttontext:{
    color: Colors.secondary,
    fontSize:20
  }
})