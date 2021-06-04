import React from "react"
import {
    SafeAreaView,
    Text,
    StyleSheet,
    StatusBar,  
    Image, 
    Pressable} from "react-native"
import {Button} from 'react-native-paper'
import Colors from './../constants/Colors'
import Graphics from './../graphics/Graphics'



export default Main = ({navigation, route}) => {
    
    return (
        <SafeAreaView styles = {styles.container} >
            <Image style = {styles.logoimage} 
                   source = {{uri: "https://i.pinimg.com/564x/dd/7a/73/dd7a73bf143c16dcc2c31426c97d2f41.jpg"}}
                   resizeMode='contain'></Image> 
            <Image style = {styles.studybuddyimage} source = {{uri:Graphics.studybuddy_URL}}></Image>
            <Image style = {styles.sloganimage} source = {{uri:"https://i.pinimg.com/originals/61/42/26/614226970f91066454718a69d5ff3c07.png"}}></Image>
            
            <Button onPress = {() => {navigation.navigate('Signup')}}
                    style = {styles.button}
                    labelStyle = {styles.buttontext}>
            Create an account
            </Button>
           
            <Text style = {styles.login}> Already a user? 
                <Pressable onPress={() => {navigation.navigate('Login')}}>
                    <Text style={{color:'red'}}>Log in here!</Text>
                </Pressable>
            </Text>
           
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
       logoimage:{
        width:220,
        height:220,
        marginTop:50,
        marginBottom:20,
        alignSelf:"center"
      },
      studybuddyimage:{
        height:50,
        width:400,
        marginBottom: 10,
        alignSelf:"center",
      },
      sloganimage:{
        height:40,
        width:400,
        alignSelf:"center"
      },
      button: {
        backgroundColor: Colors.secondary,
        width:270,
        height: 40,
        alignSelf: "center",
        marginTop: 100,
        marginBottom: 20
      },
      buttontext:{
        fontWeight: "bold",
        fontSize: 18,
        color:'black'

      },
      login:{
      alignSelf:"center",
      alignItems:"center"
    }
  }
  );
  
  




