
import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import {connect} from 'react-redux'
import { addToDashboard } from '../redux/actions/actions';
import {Button} from 'react-native-paper'




const Dashboard = ({navigation, routes, ...props}) => {
    return (
      <SafeAreaView style = {styles.container}>
          
          <Text>Your Group List here</Text>
          
          <View style = {{flexDirection: 'row', alignSelf : 'flex-start', marginLeft: 30}}>
          <Text style = {{fontSize:30}} >{props.module}</Text>
          <Button compact = {true} mode = 'contained' style = {styles.button} onPress = {() => navigation.navigate("Tab")}>View </Button>
          </View>
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
       button: {
           marginLeft: 150
       }
    })

    function mapStateToProps(state) {
        const { meetingDetails } = state
        // ownProps would look like { "id" : 123 }
      
        // component receives additionally:
        return { 
          zoomCode: meetingDetails.zoomCode,
          zoomPassword: meetingDetails.zoomPassword,
          meetingLink: meetingDetails.meetingLink,
          participantNo: meetingDetails.participantNo,
          meetingDate: meetingDetails.meetingDate,
          meetingStartTime: meetingDetails.meetingStartTime,
          meetingEndTime: meetingDetails.meetingEndTime,
          module: meetingDetails.module
        }
      }
      const mapDispatchToProps = (dispatch) => {
        return {
          
          addtodashboard: (data) => dispatch(addToDashboard(data)),
        }
      }
      
    
      export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);