import React, { useState, useEffect } from 'react';
import {  Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebase from './../../api/firebase'
import * as Authentication from './../../api/auth'
import { Button } from 'react-native-paper';

export default Coverpic = ({navigation }) => {
  const [image, setImage] = useState(null);
 
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      firebase.firestore().collection('users').doc(Authentication.getCurrentUserId()).update({coverpic: result.uri})
    }
  };

  const sendImage = () => {
    firebase.firestore().collection('users').doc(Authentication.getCurrentUserId()).update({coverpic: image});
    navigation.navigate("Home", {image:image})
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={pickImage} >Pick a cover pic</Button>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button onPress = {sendImage}>Set as cover pic</Button>
    </View>
  );
}
