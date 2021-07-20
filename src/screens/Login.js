import React, {useState} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform, 
  Pressable,
  Keyboard,
} from 'react-native';
import { CommonActions } from "@react-navigation/native";
import {Button, TextInput} from 'react-native-paper'
import Colors from './../constants/Colors'
import * as Authentication from './../../api/auth'
import Graphics from './../graphics/Graphics'
import { Alert } from 'react-native';

export default Login = ({navigation, route}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const handleLogin = () => {
    Keyboard.dismiss();
    setIsLoginLoading(true);

    Authentication.signIn(
      { email, password },
      (user) => { 
       navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [{
          name: "Home",
          params: { name: user.displayName }
        }]
      }))
     } ,
      (error) => {
        setIsLoginLoading(false);
        Alert.alert(error.toString())
        return console.error(error);
      }
    );
  }

  return (
    
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}
       style={styles.container}>
        <Image resizeMode = 'contain'
               style={styles.image} 
               source={require('./../graphics/StudyBuddy.png')}/>
        <Text style = {styles.slogan}>Welcome back!</Text>
     
        <TextInput
             style={styles.textInput}
             placeholder="Email"
             placeholderTextColor = {Colors.contrastprimary}
             onChangeText={setEmail}
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
            onChangeText={setPassword}
            value={password}
            secureTextEntry={!isPasswordVisible}
            autoCapitalize="none"
            right={<TextInput.Icon 
                    name= {isPasswordVisible? "eye" : "eye-off"}
                    color=  {Colors.contrastprimary}
                    onPress= {() => setIsPasswordVisible(!isPasswordVisible)}/>}
        />
        <Button
            style={styles.button}
            compact = {true}
            onPress={() => {handleLogin()}}
            labelStyle = {{
              color: 'black',
              fontWeight:'bold',
            }
            }
        >
        Sign in
        </Button >
          <Text style={{color: 'black'}}> 
          Not a user yet? {''}
         
        <Text onPress = {() => navigation.navigate('Signup')} style={{color: 'red'}} >  Create one here
        </Text>
       
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
    marginTop: -150,
    width:600,
    height:600,
    marginBottom: -200,
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
    backgroundColor:Colors.secondary,
    width:150,
    height: 30,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20
  },
  slogan:{
    fontSize:30,
    textAlign:"center",
    marginBottom: 100,
   },
   signup:{
     textAlign:"center",
    fontSize:23,
    fontWeight:"bold"
   }
});
 




