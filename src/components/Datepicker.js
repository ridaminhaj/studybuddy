import React, {useState} from 'react';
import {View,StyleSheet, StatusBar, Alert} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import {Button} from 'react-native-paper'
import Colors from './../constants/Colors'



const DateContext = React.createContext();
export default Datepicker = (props) => {
  
    const current_day = new Date().getDate()
    const current_month = new Date().getMonth()
    const current_year = new Date().getFullYear()
    const [date, setDate] = useState(new Date(current_year,current_month,current_day));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    
    const selectedDate = props?.date ?? date;
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate ;
      setShow(Platform.OS === 'ios');
      // setDate(currentDate);
      props?.setDate ? props.setDate(currentDate) : setDate(currentDate);
    };

   const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };

    
  
    const start = moment();
    const end = moment(selectedDate);
    const duration = moment.duration(end.diff(start)).asDays();
    const final = Math.round(duration);

    const isValidDate = () => {
    if (final > 3) {
      return true;
  } else {
      return false;
  }
}
    //this is to use with redux
    const checkValidDate = () => isValidDate ? null : 
    Alert.alert("You can only create study groups 3 days from today ", 
    "Please choose the date after " + moment(date).format('MM/DD').toString());

    return(
      <DateContext.Provider value = {{date: date}}>
      <View style = {styles.container}>
        <View>
          <Button onPress={showDatepicker} 
                  style={styles.button} 
                  mode='contained'>
            Select date:   {moment(selectedDate).format('YYYY/MM/DD').toString()  }</Button>
        </View>
        {show && (
          <DateTimePicker
            value= {selectedDate}
            mode={'date'}
            display= "default"
            is24Hours={true}
            style={{width: 300, opacity: 1, height: 30, marginTop: 50}}
            onChange={onChange}
            minimumDate = {moment().startOf('days').toDate()}
            maximumDate = {new Date(2021,9)}
          
  /> 
         
)}
</View>
</DateContext.Provider>

    )
};

const styles = StyleSheet.create({
      container: {
          paddingTop: StatusBar.currentHeight? StatusBar.currentHeight : 0,
          alignItems: 'center'
      },
      button: {
          width: 300,
          // height: 30,
          backgroundColor: Colors.tertiary,
      }
  })

 export {DateContext};
