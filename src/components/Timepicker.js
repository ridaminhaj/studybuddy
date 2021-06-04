import React, {useState} from 'react';
import {View,StyleSheet, StatusBar} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import {Button} from 'react-native-paper'
import Colors from './../constants/Colors'

export default Timepicker = (props) => {
    const current_day = new Date().getDate()
    const current_month = new Date().getMonth()
    const current_year = new Date().getFullYear()
    
    const [mode, setMode] = useState('start_time')
    const [show, setShow] = useState(false);
    const [start_time, setStartTime] = useState(new Date(current_year,current_month,current_day));
    const [end_time, setEndTime] = useState(new Date(current_year,current_month,current_day));
    
    const onStartTime = (event, selectedDate) => {
        const currentDate = selectedDate 
        setShow(Platform.OS === 'ios');
        setStartTime(currentDate);
      };

      const onEndTime = (event, selectedDate) => {
        const currentDate = selectedDate 
        setShow(Platform.OS === 'ios');
        setEndTime(currentDate)
      };
  

      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
  
  
      const showStartTimepicker = () => {
        showMode('start_time');
      };
      
      const showEndTimepicker = () => {
        showMode('end_time');
      };
  
      const starttime = moment(start_time)
      const endtime = moment(end_time)
      const duration = moment.duration(endtime.diff(starttime)).asHours();

      //to be use with redux
      const isValidTime = () => {
          if (duration < 0) {
            return false;
          } else {
           return true;
          }
      }

    return (
      <View style = {styles.container}>
        <View>
          <Button onPress={showStartTimepicker} style = {styles.button} mode = "contained">
          Select start time:  {moment(start_time).format('HH:mm').toString()}
          </Button>
        </View>
        <View>
          <Button onPress={showEndTimepicker} style = {styles.button} mode = "contained"> 
            Select end time:     {moment(end_time).format('HH:mm').toString()}
          </Button>
        </View>
        {show && (
          <DateTimePicker
            value= {mode == 'start_time' ? start_time : end_time}
            mode={'time'}
            display= "default"
            onChange={ mode == 'start_time' ? onStartTime : onEndTime}
            /> 
)}
      </View>
    );
  };

const styles = StyleSheet.create({
      container: {
        paddingTop: StatusBar.currentHeight? StatusBar.currentHeight : 0,
        alignItems: 'center'
      },
      button: {
        width: 300,
        height: 30,
        backgroundColor: Colors.tertiary,
        marginBottom: 30
    }
  })

 
