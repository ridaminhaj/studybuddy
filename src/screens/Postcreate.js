import React from "react"
import {
    SafeAreaView,
    Text,
    StyleSheet,
    StatusBar,  } from "react-native"
import {Button} from 'react-native-paper'
import Colors from './../constants/Colors'
import { CommonActions } from "@react-navigation/native";
import Modulesearch from './../components/Modulesearch'

export default Postcreate = ({navigation, route}) => {
    
    return (
        <SafeAreaView style = {styles.container} >
         
           <Text style = {styles.text}>Congratulations! {'\n'}
        You have just created a study group! {'\n'}
        Module: {'\n'}
        Time: {'\n'}
        Zoom code: {'\n'}
        Zoom password: {'\n'}
        Zoom link: {'\n'}


            </Text>
            <Button 
             mode = 'contained'
             color = {Colors.tertiary}
             compact = {true}
             onPress= {() => navigation.dispatch(CommonActions.reset({
              index: 0,
              routes: [
            {
              name: "Home",
             
              }]}))}
             style = {{marginTop:50}}
             labelStyle = {{color: Colors.contrast_tertiary}}>
             Back to Home Screen
             </Button>
      
        </SafeAreaView>
        )
  }
  
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        justifyContent: 'center',
        alignItems : 'center'},
      text: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 30
      }
  })
  