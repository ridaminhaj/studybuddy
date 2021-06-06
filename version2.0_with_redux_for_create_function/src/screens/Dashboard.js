
import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar , Button} from 'react-native';






export default Dashboard = ({navigation}) => {
    return (
      <SafeAreaView style = {styles.container}>
          <Text>Your Group List here</Text>
          <Text>Group List 1</Text>
          <Button onPress = {() => navigation.navigate("Tab")} title = "View"></Button>
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