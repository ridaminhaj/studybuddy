import React, {useState, useRef, useContext}from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Keyboard, Text, KeyboardAvoidingView, ScrollView, SafeAreaView, Platform
} from 'react-native';
import Datepicker from './../components/Datepicker';
import Timepicker from './../components/Timepicker';
import Participant from './../components/Participant';
import {TextInput, Button, IconButton} from 'react-native-paper'
import Colors from './../constants/Colors'
import {HeaderStyleInterpolators, useHeaderHeight} from 'react-navigation-stack'
import { createGroup } from '../../api/group';



export default Create = ({navigation, route}) => {

  
  
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [link, setLink] = useState("");
 const passwordTextInput = useRef();
 const linkTextInput = useRef();

  return (
  
    <KeyboardAvoidingView style = {styles.container} behavior={Platform.OS === 'ios' ? "padding" : "height"}
  keyboardVerticalOffset = {useHeaderHeight + 50} // adjust the value here if need more padding
  style = {{ flex: 1 }}
  >
  

  <ScrollView>
        <IconButton  icon = 'arrow-left-bold' size = {60} color = 'purple' 
        onPress = {() => navigation.navigate("Precreate")}></IconButton>
        
        <Text  style = {{fontSize:30, fontWeight:'bold'}}>Just some information...</Text>
        <Text style = {{marginTop: 30}} >Insert module, (to be implemented later with search bar)</Text>
         <Datepicker ></Datepicker>
       <Timepicker></Timepicker>
       <View alignItems = 'center'>
       <Participant></Participant>
       <TextInput
             style={styles.textInput}
             placeholder="Insert zoom code"
             placeholderTextColor = {Colors.contrast_tertiary}
             onChangeText={setCode}
             value={code}
             returnKeyType="next"
             blurOnSubmit={false}
             onSubmitEditing={() => passwordTextInput.current.focus()}
           
        />
           <TextInput
 
            ref = {passwordTextInput}  
             style={styles.textInput}
             placeholder="Insert zoom password"
             placeholderTextColor = {Colors.contrast_tertiary}
             onChangeText={setPassword}
             value={password}
             returnKeyType= "next"
             blurOnSubmit={false}
            autoCapitalize="none"
            onSubmitEditing={() => linkTextInput.current.focus()}
           
        />
           <TextInput
            ref = {linkTextInput}
             style={styles.textInput}
             placeholder="Insert zoom link"
             placeholderTextColor = {Colors.contrast_tertiary}
             onChangeText={setLink}
             value={link}
             returnKeyType="done"
             blurOnSubmit={false}
             onSubmitEditing = {() => Keyboard.dismiss()}
           />

           <Button 
             mode = 'contained'
             color = {Colors.tertiary}
             compact = {true}
             onPress= { () => navigation.navigate("Postcreate")
             }
             
             labelStyle = {{color: Colors.contrast_tertiary}}>
             Create study group
             </Button>
    
       </View>
       </ScrollView>

  

    </KeyboardAvoidingView>
  
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: StatusBar.currentHeight? StatusBar.currentHeight : 0,
    alignItems: 'center',
    flex: 1
   
  },
  textInput:{
    backgroundColor:Colors.tertiary,
    fontSize: 18,
    marginBottom: 30,
    width: 300,
    height: 30,
    textAlign:"center"

  }
 
})