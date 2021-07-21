import React, {useState} from 'react';
import {View, Text,StyleSheet, StatusBar, SafeAreaView, Button, Alert} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'

export default Create = (navigation, routes) => {
    const current_day = new Date().getDate()
    const current_month = new Date().getMonth()
    const current_year = new Date().getFullYear()
    
    const [participant, setParticipant] = useState(7);
    const [date, setDate] = useState(new Date(current_year,current_month,current_day));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [start_time, setStartTime] = useState(new Date(current_year,current_month,current_day));
    const [end_time, setEndTime] = useState(new Date(current_year,current_month,current_day));
    
    const onStartTime = (event, selectedDate) => {
        const currentDate = selectedDate 
        setShow(Platform.OS === 'ios');
        days_left() ? Alert.alert("You can only create 3 days ahead","Please choose the date after " + moment(date).format('MM/DD').toString()) : null;
        setStartTime(currentDate);
      };

      const onEndTime = (event, selectedDate) => {
        const currentDate = selectedDate 
        setShow(Platform.OS === 'ios');
        setEndTime(currentDate)
      };
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate ;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
     
     
      
      
      };

    const days_left2 = () => days_left ? Alert.alert("You can only create study groups 3 days from today ", "Please choose the date after " + moment(date).format('MM/DD').toString()) : null;
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showStartTimepicker = () => {
      showMode('start_time');
    };
    const showEndTimepicker = () => {
        showMode('end_time');
      };
  
      var start = moment();
      var end = moment(date);
      
      //Difference in number of days
      const duration = moment.duration(end.diff(start)).asDays();
      const final = Math.round(duration);
      const startt = moment(start_time)
      const endt = moment(end_time)
      const dd = moment.duration(endt.diff(startt)).asHours();

const days_left = () => {
  if (final < 3) {
      return true;
  } else {
      return false;
  }
}

const valid_start = () => {
    if (dd < 0) {
        return false;
    } else {
        return true;
    }
}
    return (
      <SafeAreaView style = {styles.container}>
        <View>
          <Button onPress={showDatepicker
        } title={"Select date:   " + moment(date).format('YYYY/MM/DD').toString()  } />
        </View>
        <View>
          <Button onPress={showStartTimepicker} title={"Select start time:   " + moment(start_time).format('HH:mm').toString()} /> 
        </View>
        <View>
          <Button onPress={showEndTimepicker} title={"Select end time:   " + moment(end_time).format('HH:mm').toString()} /> 
        </View>
        {show && (
          <DateTimePicker
            value= {mode == 'date' ? date : mode == 'start_time' ? start_time : end_time}
            mode={mode != 'date' ? 'time' : 'date'}
            display= "default"
            onChange={mode == 'date' ? onChange : mode == 'start_time' ? onStartTime : onEndTime}
            minimumDate = {new Date(current_year,current_month,current_day)}
            maximumDate = {new Date(2021,9)}
            
       

          /> 
         
)}
<View>
          <Button title = {'Participant' + participant.toString()} onPress={() => {valid_start() ? null : Alert.alert("End time less than start time")}}/>
        </View>
<View>
          <Button title = 'Submit' onPress={() => {valid_start() ? null : Alert.alert("End time less than start time")}}/>
        </View>

      </SafeAreaView>
    );
  };



  const styles = StyleSheet.create({
      container: {
      paddingTop: StatusBar.currentHeight? StatusBar.currentHeight : 0,
      alignItems: 'center'
      },
  })