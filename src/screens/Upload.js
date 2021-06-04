
import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';






export default Upload = (props) => {
    return (
      <SafeAreaView style = {styles.container}>
          <Text>Hello</Text>
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
    })