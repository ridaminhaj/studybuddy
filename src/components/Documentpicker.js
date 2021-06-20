import React, {useState} from 'react';
import { StyleSheet,Button, TouchableOpacity, SafeAreaView, StatusBar  } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { IconButton } from 'react-native-paper';
import firebase from './../../api/firebase'

import * as FileSystem from 'expo-file-system';


export default Documentpicker = (props) =>{

    const [ doc, setDoc ] = useState();
    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({ type: "*/*", copyToCacheDirectory: true }).then(response => {
            if (response.type == 'success') {          
              let { name, size, uri } = response;
              let nameParts = name.split('.');
              let fileType = nameParts[nameParts.length - 1];
              var fileToUpload = {
                name: name,
                size: size,
                uri: uri,
                type: "application/" + fileType
              };
              console.log(fileToUpload, '...............file')
              setDoc(fileToUpload);
            } 
          });
        // console.log(result);
      //  console.log("Doc: " + doc.uri);
    }

    const postDocument = () => {
        const url = "http://192.168.10.107:8000/upload";
        
        const formData = new FormData();
        formData.append('document', doc);
        const options = {
            method: 'POST',
            body: formData,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
            },
        };
        console.log(formData);
     

        fetch(url, options).catch((error) => console.log(error));
    }

    return (        
        <SafeAreaView style = {styles.container}>
           <TouchableOpacity>
            <IconButton style = {{marginTop: 400}} icon = 'file-upload' size = {60} color = 'red' 
            onPress = {pickDocument}
            
            ></IconButton>
            </TouchableOpacity>
            <Button title="Upload" onPress={postDocument} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
 
    container: {
      paddingTop: StatusBar.currentHeight? StatusBar.currentHeight : 0,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      },
});


/*   const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
          console.log(result.uri);
     const ref =   firebase.storage().ref('document').child('mydocs')
     
     ref.put(result.uri).then( async (snapshot) => {
         
         console.log(result.uri)
         const fileContent = await ExpoFileSystem.readAsStringAsync(result.uri);
        console.log('Uploaded a blob or file!');
        console.log(fileContent)
      })
    }
    

    
    
    
    return(
        <SafeAreaView style = {styles.container}>
    
            
            <TouchableOpacity>
            <IconButton style = {{marginTop: 400}} icon = 'file-upload' size = {60} color = 'red' 
            onPress = {pickDocument}
            
            ></IconButton>
            </TouchableOpacity>
          
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    background:{
        backgroundColor:"radial-gradient(ellipse at left bottom,    rgb(163, 237, 255) 0%,    rgba(57, 232, 255, 0.9) 59%,    rgba(48, 223, 214, 0.9) 100% )",  
    },
    file:{
        color:'black',
        marginHorizontal:145,
    },
    button:{
        marginHorizontal:60,
    },
    container: {
      paddingTop: StatusBar.currentHeight? StatusBar.currentHeight : 0,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      },
});
  */

/*import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, StatusBar  } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { IconButton } from 'react-native-paper';
import firebase from './../../api/firebase'

export default Documentpicker = (props) =>{
    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
          console.log(result.uri);
     const ref =   firebase.storage().ref('document').child('mydocs')
     ref.put(result.uri).then((snapshot) => {
         console.log(result.uri)
        console.log('Uploaded a blob or file!');
      })

    }

    
    return(
        <SafeAreaView style = {styles.container}>
    
            
            <TouchableOpacity>
            <IconButton style = {{marginTop: 400}} icon = 'file-upload' size = {60} color = 'red' 
            onPress = {pickDocument}
            
            ></IconButton>
            </TouchableOpacity>
          
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    background:{
        backgroundColor:"radial-gradient(ellipse at left bottom,    rgb(163, 237, 255) 0%,    rgba(57, 232, 255, 0.9) 59%,    rgba(48, 223, 214, 0.9) 100% )",  
    },
    file:{
        color:'black',
        marginHorizontal:145,
    },
    button:{
        marginHorizontal:60,
    },
    container: {
      paddingTop: StatusBar.currentHeight? StatusBar.currentHeight : 0,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      },
});
*/