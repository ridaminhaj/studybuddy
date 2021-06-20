import React, {useState} from 'react';
import {
  StatusBar,
  Image,
  Text,
  StyleSheet,Dimensions, TouchableOpacity, ImageBackground,View,
  SafeAreaView,
} from 'react-native';
import {Button} from "react-native-paper";
import * as Authentication from './../../api/auth';
import Colors from '../constants/Colors'
import Graphics from './../graphics/Graphics'
import { CommonActions } from '@react-navigation/native';
import Imagepicker from '../components/Imagepicker';
import firebase from './../../api/firebase'
const ex= {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
  }
export default Home = ({navigation, route}) => {
  const username = Authentication.getCurrentUserName();
  const [image,setImage] = useState('h')
  const[cover,setCover] = useState('h')
  firebase.firestore().collection('users').doc(Authentication.getCurrentUserId()).get().then(value => setImage(value.data().profilepic))
  firebase.firestore().collection('users').doc(Authentication.getCurrentUserId()).get().then(value => setCover(value.data().coverpic))
  const handleLogout = () => {
    

    Authentication.signOut(
      () => navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [{ name: "Login" }]
      })),
      console.error
    );
  }
  
  return (
    
    <SafeAreaView style = {styles.container} > 
    
    <ImageBackground style = {{width: '100%', height: '50%'}} source = {{uri:cover}}>
     <Text onPress = {() => navigation.navigate('Coverpic')}  style = {styles.cover}>Change cover photo?</Text>
      <View style = {styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Profilepic')}>
      <Image  
             style ={styles.image} 
             source={ {uri:image
            }
               
              }/>
              </TouchableOpacity>
              </View>
        
                    </ImageBackground>
         <View style = {styles.container}>  
      <Text style = {styles.welcome}> {username} </Text>
  
     <View style = {styles.allbutton}>
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
      onPress = {() => navigation.navigate("Join")}
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

   </View>
      <Text onPress = {handleLogout} style={{color: 'red', marginTop: ex.height* 0.15}} >  Sign out
        </Text>
      </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: StatusBar.currentHeight? StatusBar.currentHeight : 0,
    alignItems: 'center'
  },
  cover: {
    color: 'white',
    marginLeft: ex.width * 0.75,
    marginTop: StatusBar.currentHeight? 
    StatusBar.currentHeight *0.1
  
     :   0.01 * ex.height

  },
  image:{
    
    width:100,
    height:100,
    borderRadius : 500,
    overflow : 'hidden',
    
   
  },
  welcome:{
    fontSize:30,
    textAlign:'center',
    marginBottom:30,
    marginTop:-180,
    
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
  },
  allbutton: {
    marginTop: ex.height*0.02
  }
})