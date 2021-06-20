
import React from 'react'
import { View, Text, SafeAreaView , StyleSheet, StatusBar} from 'react-native';
import {connect} from 'react-redux'

import moment from 'moment'
import { getGroupData } from '../../api/dataService';



export default  Details = ({navigation, route, ...props}) => {
  const post = route?.params?.post;
 

  
    return (
      <SafeAreaView style = {styles.container}>

       
        <Text onPress ={() => {navigation.navigate("Webview", {post: post})}} style = {styles.text}>Zoom link: {post?.zoomLink}</Text>
        <Text style = {styles.text}>Zoom code: {post?.zoomCode}</Text>
        <Text style = {styles.text}>Zoom password: {post?.zoomPassword}</Text>
       
      </SafeAreaView>


    )
}

const styles = StyleSheet.create(
    {container: {
       paddingTop: StatusBar.currentHeight? StatusBar.currentHeight : 0,
       flexDirection: 'column',
       justifyContent: 'center',
       alignContent:'center',
       marginTop:60,
       marginLeft: 20
       },
       text: {
           marginBottom:40,
           fontSize:20
    }
    })

    