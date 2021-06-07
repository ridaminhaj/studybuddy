import React from "react"
import {
    SafeAreaView,
    Text,
    StyleSheet,
    StatusBar,  } from "react-native"
import {Button} from 'react-native-paper'
import Colors from './../constants/Colors'
import { CommonActions } from "@react-navigation/native";

import { connect } from 'react-redux'
import moment from 'moment'

const Postcreate = ({navigation, route, ...props}) => {
    
    return (
        <SafeAreaView style = {styles.container} >
         
           <Text style = {styles.text}>Congratulations! {'\n'}
        You have just created a study group! {'\n'}
        Module: {props.module}{'\n'}
        Date: {moment(props.meetingDate).format('YYYY/MM/DD').toString()}{'\n'}
        StartTime: {moment(props.meetingStartTime).format('HH:mm').toString()}{'\n'}
        Endtime: {moment(props.meetingEndTime).format('HH:mm').toString()}{'\n'}
        Participant No: {props.participantNo}{'\n'}
        Zoom code: {props.zoomCode}{'\n'}
        Zoom password: {props.zoomPassword}{'\n'}
        Zoom link: {props.meetingLink}{'\n'}


            </Text>
            <Button 
             mode = 'contained'
             color = {Colors.tertiary}
             compact = {true}
             onPress= {() => { navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [
              {
                name: "Home",
                
              }]
              }))}}
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

  function mapStateToProps(state, ownProps) {
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
      module: meetingDetails.module,
    }
  }
  

  export default connect(mapStateToProps, null)(Postcreate);
  