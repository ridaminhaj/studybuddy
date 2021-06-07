import React, {useState} from 'react';
import {
  Keyboard,
  Image,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform, 
  Pressable,
} from 'react-native';
import * as Authentication from "../../api/auth";
import { CommonActions } from "@react-navigation/native";
import {Button, TextInput} from 'react-native-paper';
import Colors from './../constants/Colors'
import Graphics from './../graphics/Graphics'
export default Signup = ({navigation, route}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignedUp, setIsSignedUp] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);

  const handleNameUpdate = (text) => setName(text)
  const handleEmailUpdate = (text) => setEmail(text)
  const handlePasswordUpdate = (text) => setPassword(text)
  const handlePasswordVisible = (boolean) => setIsPasswordVisible(boolean)
 
  const handleRegister = () => {
    Keyboard.dismiss();
    setIsRegisterLoading(true);

    Authentication.createAccount(
      { name, email, password },
      (user) => 
       setTimeout(() => {
        navigation.dispatch(CommonActions.reset({
          index: 0,
          routes: [
        {
          name: "Login",
          params: {name: user.displayName,
          email: user.email}
        }]
        }))
       }, 1500) ,
      (error) => {
        setIsRegisterLoading(false);
        return console.error(error);
      }
    );
  }

  return (
    
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}
       style={styles.container}>
        <Image style={styles.image} 
               source={{uri:Graphics.logo_URL}}
               resizeMode= 'contain'/>
        <Text style = {styles.slogan}>Join us now and study hassle free!</Text>
        <TextInput
            style={styles.textInput}
            placeholder="Name"
            placeholderTextColor = {Colors.contrastprimary}
            onChangeText={handleNameUpdate}
            value={name}
            autoCapitalize="words"
            returnKeyType="next"
            blurOnSubmit={false}
        />
        <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor = {Colors.contrastprimary}
            onChangeText={handleEmailUpdate}
            value={email}
            keyboardType="email-address"
            autoCapitalize="words"
            returnKeyType="next"
            blurOnSubmit={false}
        />
        <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor = {Colors.contrastprimary}
            onChangeText={handlePasswordUpdate}
            value={password}
            secureTextEntry={!isPasswordVisible}
            autoCapitalize="none"
            right={<TextInput.Icon 
                    name= {isPasswordVisible? "eye" : "eye-off"}
                    color= {Colors.contrastprimary}
                    onPress= {() => setIsPasswordVisible(!isPasswordVisible)}/>}
        />
        <Button
            style={styles.button}
            compact = {true}
            onPress={  () => {
              handleRegister();
              isRegisterLoading? null : navigation.navigate('Signup')}}
              labelStyle = {styles.signup}
        >
  
       Sign up
        </Button >
          <Text style = {{color:'black'}}> Already a user? {''}
          <Pressable onPress = {() => navigation.navigate('Login')}>
        <Text style={{color: 'red'}} > Log in here!</Text>
        </Pressable>
        </Text>
      
      </KeyboardAvoidingView>
     
      
    
  )
   }

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    marginBottom: 20,
    marginTop:30,
    width:200,
    height:200
  },
  textInput: {
    backgroundColor:Colors.primary,
    fontSize: 20,
    marginBottom: 8,
    width: 300,
    height: 50,
    textAlign:"center"
  },
  button: {
    backgroundColor: Colors.secondary,
    width:150,
    height: 30,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20
  },
  slogan:{
    fontSize:30,
    textAlign:"center",
    marginBottom: 30,
   },
   signup:{
    fontWeight:"bold",
    color:'black'
   }
});
 




