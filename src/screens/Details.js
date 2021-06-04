
import React from 'react'
import { View, Text, SafeAreaView , StyleSheet, StatusBar} from 'react-native';





export default Details = (props) => {
    return (
      <SafeAreaView style = {styles.container}>

        <Text style = {styles.text}>Date:</Text>
        <Text style = {styles.text}>Time:</Text>
        <Text style = {styles.text}>Zoom link:</Text>
        <Text style = {styles.text}>Zoom code:</Text>
        <Text style = {styles.text}>Zoom password:</Text>
      </SafeAreaView>


    )
}

const styles = StyleSheet.create(
    {container: {
       paddingTop: StatusBar.currentHeight? StatusBar.currentHeight : 0,
       flexDirection: 'column',
       justifyContent: 'space-between',
       marginTop:60,
       marginLeft: 20
       },
       text: {
           marginBottom:40,
           fontSize:20
    }
    })