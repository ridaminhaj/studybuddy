
import React from 'react'
import { View, Text, SafeAreaView , StyleSheet, StatusBar} from 'react-native';
import {connect} from 'react-redux'

import moment from 'moment'



const Details = ({navigation, ...props}) => {
    return (
      <SafeAreaView style = {styles.container}>

        <Text style = {styles.text}>Date: {moment(props.meetingDate).format('YYYY/MM/DD').toString()}</Text>
        <Text style = {styles.text}>Time: {moment(props.meetingStartTime).format('HH:mm').toString()}</Text>
        <Text style = {styles.text}>Zoom link: {props.meetingLink}</Text>
        <Text style = {styles.text}>Zoom code: {props.zoomCode}</Text>
        <Text style = {styles.text}>Zoom password:{props.zoomPassword}</Text>
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
  
  
    export default connect(mapStateToProps, null)(Details);