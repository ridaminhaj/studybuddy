import React from "react"
import {
    SafeAreaView,
    Text,
    StyleSheet,
    StatusBar,  } from "react-native"
import {Button, IconButton} from 'react-native-paper'
import Colors from './../constants/Colors'

export default Precreate = ({navigation, route}) => {
    
    return (
        <SafeAreaView style = {styles.container} >
            <IconButton  icon = 'arrow-left-bold' size = {60} color = 'purple' 
        onPress = {() => navigation.navigate("Home")}></IconButton>
           <Text style = {styles.text}>Hold Up! {'\n'}
           Please have your Zoom meeting scheduled and your code and password ready!

            </Text>
            <Button 
             mode = 'contained'
             color = {Colors.tertiary}
             compact = {true}
             onPress= {() => {navigation.navigate("Create")}}
             style = {{marginTop:50}}
             labelStyle = {{color: Colors.contrast_tertiary}}>
             Proceed to create
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
  