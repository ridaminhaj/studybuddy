import React, { useState, useRef, useContext } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Modal,
  Dimensions,
  Keyboard, Text, KeyboardAvoidingView, ScrollView, SafeAreaView, Platform, Alert
} from 'react-native';
import { connect } from 'react-redux'
import Datepicker from './../components/Datepicker';
import Timepicker from './../components/Timepicker';
import Participant from './../components/Participant';
import { TextInput, Button, IconButton } from 'react-native-paper'
import Colors from './../constants/Colors'
import { DateContext } from './../components/Datepicker'
import moment from 'moment'
import { setMeetingDetails } from '../redux/actions/actions';
import { LogBox } from 'react-native';
import { createGroup } from '../../api/dataService';

const modes = {
  time: 'time',
  date: 'date'
}


LogBox.ignoreLogs(['Setting a timer']);
const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
const Create = ({ navigation, route, setMeetingDetails }) => {

  let date = useContext(DateContext);
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [link, setLink] = useState("");
  const [memberNo, setMemberNo] = useState(0);
  const [meetingDate, setMeetingDate] = useState(moment().startOf('days').toDate());
  const [startTime, setStartTime] = useState(moment().startOf('days').toDate());
  const [endTime, setEndTime] = useState(moment().startOf('days').toDate());
  const [module, setModule] = useState("");
  const passwordTextInput = useRef();
  const linkTextInput = useRef();
  



  const onCreate = () => {
    
    setMeetingDetails({
      zoomCode: code,
      zoomPassword: password,
      meetingLink: link,
      participantNo: memberNo,
      meetingDate: meetingDate,
      meetingStartTime: startTime,
      meetingEndTime: endTime,
      module: module
    });
    
    isValidDate() ? 
    (isValidTime() ? 
    ( isValidMember() ? 
    (isValidCode() ? 
    ( isValidPassword() ? 
    (isValidLink() ? (updateFirebase(), navigation.navigate("Postcreate") ): 
    Alert.alert("You haven't enter your zoom link")) : 
    Alert.alert("You haven't enter your password")) : 
    Alert.alert("Hey! You haven't enter your zoom code")) : 
    Alert.alert("Hey ! You haven't chosen your member no!") ): 
    Alert.alert("How come end time is earlier than start time?")) :
    Alert.alert("You can only create study groups 3 days ahead")   
  }

  const start = moment();
  const end = moment(meetingDate);
  const ddd = moment.duration(end.diff(start)).asDays();
  const final = Math.round(ddd);

  const isValidDate = () => {
  if (final > 3) {
    return true;
} else {
    return false;
}
}
const starttime = moment(startTime)
const endtime = moment(endTime)
const duration = moment.duration(endtime.diff(starttime)).asHours();


const isValidTime = () => {
    if (duration < 0 || duration == 0 ) {
      return false;
    } else {
     return true;
    }
}

const isValidMember = () => memberNo == 0 ? false : true

const isValidCode = () => code == "" ? false : true

const isValidPassword = () => password == "" ? false : true

const isValidLink = () => link == "" ? false : true

  const updateFirebase = async () => {
    createGroup({
      module,
      meetingDate: moment(meetingDate).format('YYYY/MM/DD'),
      startTime: moment(startTime).format('HH:mm'),
      endTime: moment(endTime).format('HH:mm'),
      memberNo,
      members: null,
      zoomLink: link,
      zoomCode: code,
      zoomPassword: password,
      available: true,
      vacancy: memberNo - 1
    });
   
  }


 





  return (
    <>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? "padding" : "height"}
        // keyboardVerticalOffset={useHeaderHeight() + 50} // adjust the value here if need more padding
        style={{ flex: 1 }}
      >


        <ScrollView>
          <IconButton icon='arrow-left-bold' size={60} color='purple'
            onPress={() => navigation.navigate("Precreate")}></IconButton>

          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Just some information...</Text>
          <View style={styles.dateContainer}>
          <TextInput


style={styles.textInput}
placeholder="Insert module"
placeholderTextColor={Colors.contrast_tertiary}
onChangeText={setModule}
value= {module}

blurOnSubmit={false}
autoCapitalize="none"


/>
</View>
          <View style={styles.dateContainer}>
            <Datepicker
              date={meetingDate}
              setDate={setMeetingDate}
            />
          </View>
          <View style={styles.dateContainer}>
            <Timepicker
              startTime={startTime}
              setStartTime={setStartTime}
              endTime={endTime}
              setEndTime={setEndTime}
            />
          </View>
          <View style={styles.dateContainer}>
            <Participant
              value={memberNo}
              setValue={setMemberNo}
            />
          </View>
          <View style={styles.dateContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Insert zoom code"
              placeholderTextColor={Colors.contrast_tertiary}
              onChangeText={setCode}
              value={code}
              returnKeyType="next"
              blurOnSubmit={false}
              onSubmitEditing={() => passwordTextInput.current.focus()}

            />
          </View>
          <View style={styles.dateContainer}>
            <TextInput

              ref={passwordTextInput}
              style={styles.textInput}
              placeholder="Insert zoom password"
              placeholderTextColor={Colors.contrast_tertiary}
              onChangeText={setPassword}
              value={password}
              returnKeyType="next"
              blurOnSubmit={false}
              autoCapitalize="none"
              onSubmitEditing={() => linkTextInput.current.focus()}

            />
          </View>
          <View style={styles.dateContainer}>
            <TextInput
              ref={linkTextInput}
              style={styles.textInput}
              placeholder="Insert zoom link"
              placeholderTextColor={Colors.contrast_tertiary}
              onChangeText={setLink}
              value={link}
              returnKeyType="done"
              blurOnSubmit={false}
              onSubmitEditing={() => Keyboard.dismiss()}
            />
          </View>
          <View style={styles.doneButton}>
            <Button
              mode='contained'
              color={Colors.tertiary}
              compact={true}
              onPress={onCreate}

              labelStyle={{ color: Colors.contrast_tertiary }}>
              Create study group
             </Button>
          </View>

        </ScrollView>

      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    flex: 1

  },
  dateContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: Colors.tertiary,
    fontSize: 18,
    marginBottom: 30,
    width: 300,
    height: 30,
    textAlign: "center"
  },
  button: {
    width: 300,
    backgroundColor: Colors.tertiary,
  },
  buttonContainer: {
    marginBottom: 30
  },
  doneButton: {
    marginBottom: 20,
  },
})

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    setMeetingDetails: (data) => dispatch(setMeetingDetails(data)),
  }
}
export default connect(null, mapDispatchToProps)(Create)
