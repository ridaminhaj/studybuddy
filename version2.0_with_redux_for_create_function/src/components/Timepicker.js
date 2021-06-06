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

    const startTime = props?.startTime ?? start_time;
    const endTime = props?.endTime ?? end_time;
    
    const onStartTime = (event, selectedDate) => {
        const currentDate = selectedDate 
        setShow(Platform.OS === 'ios');
        // setStartTime(currentDate);
        props?.setStartTime ? props.setStartTime(selectedDate) : setStartTime(currentDate);
      };

      const onEndTime = (event, selectedDate) => {
        const currentDate = selectedDate 
        setShow(Platform.OS === 'ios');
        // setEndTime(currentDate);
        props?.setEndTime ? props.setEndTime(selectedDate) : setEndTime(currentDate);
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
  
      const starttime = moment(startTime)
      const endtime = moment(endTime)
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
          <Button onPress={showStartTimepicker} style={[styles.button, styles.buttonContainer]} mode="contained">
          Select start time:  {moment(startTime).format('HH:mm').toString()}
          </Button>
          <Button onPress={showEndTimepicker} style={styles.button} mode="contained"> 
            Select end time:     {moment(endTime).format('HH:mm').toString()}
          </Button>
        {show && (
          <DateTimePicker
            value={mode == 'start_time' ? startTime : endTime}
            style={{ width: 300, opacity: 1, height: 30, marginTop: 50 }}
            mode={'time'}
            display="default"
            onChange={mode == 'start_time' ? onStartTime : onEndTime}
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
      buttonContainer: {
        marginBottom: 30
      },
      button: {
        width: 300,
        // height: 30,
        backgroundColor: Colors.tertiary,
    }
  })

 
