import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../../api/FireBase';
import * as DocumentPicker from "expo-document-picker";
import {createGroup} from "../../api/dataService";
import {addFile} from "../../api/uploadApi";

export default function UploadTestScreen({navigation}) {

    /*function storeUser() {
        {
            setIsLoading('true')
            firebase.firestore().collection('FileTest').add({
                image: {image},
                file: {file}
            }).then(() => {
                setImage('null')
                setIsLoading(false);
                setFile('null');
            })
                .catch((err) => {
                    console.error("Error found: ", err);
                    setIsLoading('false')
                });
        }
    }*/


    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [doc, setDoc] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickFile = async () => {
        let result = await DocumentPicker.getDocumentAsync({
            type: "*/*" // all files
            // type: "image/!*" // all images files
            // type: "audio/!*" // all audio files
            //type: "application/!*" // for pdf, doc and docx
            // type: "application/pdf" // .pdf
            // type: "application/msword" // .doc
            // type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" // .docx
            // type: "vnd.ms-excel" // .xls
            // type: "vnd.openxmlformats-officedocument.spreadsheetml.sheet" // .xlsx
            // type: "text/csv" // .csv
        });
        setDoc(result.uri)
    }

    /*const pickFile = async () => {
        try{
        const results = await DocumentPicker.pickMultiple({
            type: [DocumentPicker.types.allFiles],
        });
            setFile(results)
        }

    catch
    (err)
    {
        if (DocumentPicker.isCancel(err)) {
            alert('Canceled');
        } else {
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
        }
    }
    };*/


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
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            <Button title = 'Pick a file' onPress = {pickFile} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            {doc && <Image source={{uri:doc}} style={{width:200, height: 200}}/>}
            <Button title='Confirm Selection' onPress={() => navigation.navigate('Files', {doc: {doc}, image: {image}})} /*onPress={() => navigation.navigate('HomeStack', {},
                {
                    type: 'Navigate',
                    routeName: 'Files',
                    params: {file:{file}, image:{image}}
                })}*/
            />
        </View>
    );
};





/*import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Button} from "react-native";
import React from 'react';


export default function UploadTestScreen () {
    return(
    <Button style={{backgroundColor: 'black'}} onPress={launchCamera(options?, callback)}/>
    )
}*/











/*
import React from "react";
import {
    StyleSheet,
    View,
    Button,
    Image,
    ActivityIndicator,
    Platform,
    SafeAreaView,
    Text,
} from "react-native";
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-picker';
export default class UploadTestScreen extends React.Component {

    state = {
        imagePath: require("../assets/namebg.png"),
        isLoading: false,
        status: '',
    }

    chooseFile = () => {
        this.setState({ status: '' });
        let options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true, // do not backup to iCloud
                path: 'images', // store camera images under Pictures/images for android and Documents/images for iOS
            },
        };
        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker', storage());
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let path = this.getPlatformPath(response).value;
                let fileName = this.getFileName(response.fileName, path);
                this.setState({ imagePath: path });
/!*
                this.uploadImageToStorage(path, fileName);
*!/
            }
        });
    };

    getFileName(name, path) {
        if (name != null) { return name; }

        if (Platform.OS === "ios") {
            path = "~" + path.substring(path.indexOf("/Documents"));
        }
        return path.split("/").pop();
    }

   /!* uploadImageToStorage(path, name) {
        this.setState({ isLoading: true });
        let reference = storage().ref(name);
        let task = reference.putFile(path);
        task.then(() => {
            console.log('Image uploaded to the bucket!');
            this.setState({ isLoading: false, status: 'Image uploaded successfully' });
        }).catch((e) => {
            status = 'Something went wrong';
            console.log('uploading image error => ', e);
            this.setState({ isLoading: false, status: 'Something went wrong' });
        });
    }*!/

    /!**
     * Get platform specific value from response
     *!/
    getPlatformPath({ path, uri }) {
        return Platform.select({
            android: { "value": path },
            ios: { "value": uri }
        })
    }

    getPlatformURI(imagePath) {
        let imgSource = imagePath;
        if (isNaN(imagePath)) {
            imgSource = { uri: this.state.imagePath };
            if (Platform.OS == 'android') {
                imgSource.uri = "file:///" + imgSource.uri;
            }
        }
        return imgSource
    }

    render() {
        let { imagePath } = this.state;
        let imgSource = this.getPlatformURI(imagePath)
        return (
            <SafeAreaView style={styles.container}>
                {this.state.isLoading && <ActivityIndicator size="large" style={styles.loadingIndicator} />}
                <View style={styles.imgContainer}>
                    <Text style={styles.boldTextStyle}>{this.state.status}</Text>
                    <Image style={styles.uploadImage} source={imgSource} />
                    <View style={styles.eightyWidthStyle} >
                        <Button title={'Upload Image'} onPress={this.chooseFile}/>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#e6e6fa',
    },
    imgContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    eightyWidthStyle: {
        width: '80%',
        margin: 2,
    },
    uploadImage: {
        width: '80%',
        height: 300,
    },
    loadingIndicator: {
        zIndex: 5,
        width: '100%',
        height: '100%',
    },
    boldTextStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#5EB0E5',
    }

});
*/


/*import storage from '@react-native-firebase/storage'; // 1

function uploadImageToStorage (path, imageName) {
    let reference = storage().ref(imageName);         // 2
    let task = reference.putFile(path);               // 3

    task.then(() => {                                 // 4
        console.log('Image uploaded to the bucket!');
    }).catch((e) => console.log('uploading image error => ', e));
}*/






















// import React, { Fragment, Component } from 'react';
// import ImagePicker from 'react-native-image-picker';
// import {
//     SafeAreaView,
//     StyleSheet,
//     ScrollView,
//     View,
//     Text,
//     StatusBar,
//     Image,
//     Button,
//     Dimensions,
//     TouchableOpacity
// } from 'react-native';
//
// import {
//     Header,
//     LearnMoreLinks,
//     Colors,
//     DebugInstructions,
//     ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
//
// const options = {
//     title: 'Select Avatar',
//     customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//     storageOptions: {
//         skipBackup: true,
//         path: 'images',
//     },
// };
// export default class UploadTestScreen extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             filepath: {
//                 data: '',
//                 uri: ''
//             },
//             fileData: '',
//             fileUri: ''
//         }
//     }
//
//     chooseImage = () => {
//         let options = {
//             title: 'Select Image',
//             customButtons: [
//                 { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
//             ],
//             storageOptions: {
//                 skipBackup: true,
//                 path: 'images',
//             },
//         };
//         ImagePicker.showImagePicker(options, (response) => {
//             console.log('Response = ', response);
//
//             if (response.didCancel) {
//                 console.log('User cancelled image picker');
//             } else if (response.error) {
//                 console.log('ImagePicker Error: ', response.error);
//             } else if (response.customButton) {
//                 console.log('User tapped custom button: ', response.customButton);
//                 alert(response.customButton);
//             } else {
//                 const source = { uri: response.uri };
//
//                 // You can also display the image using data:
//                 // const source = { uri: 'data:image/jpeg;base64,' + response.data };
//                 // alert(JSON.stringify(response));s
//                 console.log('response', JSON.stringify(response));
//                 this.setState({
//                     filePath: response,
//                     fileData: response.data,
//                     fileUri: response.uri
//                 });
//             }
//         });
//     }
//
//     launchCamera = () => {
//         let options = {
//             storageOptions: {
//                 skipBackup: true,
//                 path: 'images',
//             },
//         };
//         ImagePicker.launchCamera(options, (response) => {
//             console.log('Response = ', response);
//
//             if (response.didCancel) {
//                 console.log('User cancelled image picker');
//             } else if (response.error) {
//                 console.log('ImagePicker Error: ', response.error);
//             } else if (response.customButton) {
//                 console.log('User tapped custom button: ', response.customButton);
//                 alert(response.customButton);
//             } else {
//                 const source = { uri: response.uri };
//                 console.log('response', JSON.stringify(response));
//                 this.setState({
//                     filePath: response,
//                     fileData: response.data,
//                     fileUri: response.uri
//                 });
//             }
//         });
//
//     }
//
//     launchImageLibrary = () => {
//         let options = {
//             storageOptions: {
//                 skipBackup: true,
//                 path: 'images',
//             },
//         };
//         ImagePicker.launchImageLibrary(options, (response) => {
//             console.log('Response = ', response);
//
//             if (response.didCancel) {
//                 console.log('User cancelled image picker');
//             } else if (response.error) {
//                 console.log('ImagePicker Error: ', response.error);
//             } else if (response.customButton) {
//                 console.log('User tapped custom button: ', response.customButton);
//                 alert(response.customButton);
//             } else {
//                 const source = { uri: response.uri };
//                 console.log('response', JSON.stringify(response));
//                 this.setState({
//                     filePath: response,
//                     fileData: response.data,
//                     fileUri: response.uri
//                 });
//             }
//         });
//
//     }
//
//     renderFileData() {
//         if (this.state.fileData) {
//             return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
//                           style={styles.images}
//             />
//         } else {
//             return <Image source={require('../assets/profile.png')}
//                           style={styles.images}
//             />
//         }
//     }
//
//     renderFileUri() {
//         if (this.state.fileUri) {
//             return <Image
//                 source={{ uri: this.state.fileUri }}
//                 style={styles.images}
//             />
//         } else {
//             return <Image
//                 source={require('../assets/logo.png')}
//                 style={styles.images}
//             />
//         }
//     }
//     render() {
//         return (
//             <Fragment>
//                 <StatusBar barStyle="dark-content" />
//                 <SafeAreaView>
//                     <View style={styles.body}>
//                         <Text style={{textAlign:'center',fontSize:20,paddingBottom:10}} >Pick Images from Camera & Gallery</Text>
//                         <View style={styles.ImageSections}>
//                             <View>
//                                 {this.renderFileData()}
//                                 <Text  style={{textAlign:'center'}}>Base 64 String</Text>
//                             </View>
//                             <View>
//                                 {this.renderFileUri()}
//                                 <Text style={{textAlign:'center'}}>File Uri</Text>
//                             </View>
//                         </View>
//
//                         <View style={styles.btnParentSection}>
//                             <TouchableOpacity onPress={this.chooseImage} style={styles.btnSection}  >
//                                 <Text style={styles.btnText}>Choose File</Text>
//                             </TouchableOpacity>
//
//                             <TouchableOpacity onPress={this.launchCamera} style={styles.btnSection}  >
//                                 <Text style={styles.btnText}>Directly Launch Camera</Text>
//                             </TouchableOpacity>
//
//                             <TouchableOpacity onPress={this.launchImageLibrary} style={styles.btnSection}  >
//                                 <Text style={styles.btnText}>Directly Launch Image Library</Text>
//                             </TouchableOpacity>
//                         </View>
//
//                     </View>
//                 </SafeAreaView>
//             </Fragment>
//         );
//     }
// };
//
// const styles = StyleSheet.create({
//     scrollView: {
//         backgroundColor: Colors.lighter,
//     },
//
//     body: {
//         backgroundColor: Colors.white,
//         justifyContent: 'center',
//         borderColor: 'black',
//         borderWidth: 1,
//         height: Dimensions.get('screen').height - 20,
//         width: Dimensions.get('screen').width
//     },
//     ImageSections: {
//         display: 'flex',
//         flexDirection: 'row',
//         paddingHorizontal: 8,
//         paddingVertical: 8,
//         justifyContent: 'center'
//     },
//     images: {
//         width: 150,
//         height: 150,
//         borderColor: 'black',
//         borderWidth: 1,
//         marginHorizontal: 3
//     },
//     btnParentSection: {
//         alignItems: 'center',
//         marginTop:10
//     },
//     btnSection: {
//         width: 225,
//         height: 50,
//         backgroundColor: '#DCDCDC',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 3,
//         marginBottom:10
//     },
//     btnText: {
//         textAlign: 'center',
//         color: 'gray',
//         fontSize: 14,
//         fontWeight:'bold'
//     }
// });
//
//





/*
import {View, TouchableOpacity, Text, StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import FormButton from "../components/FormButton";
import {windowHeight} from "../utils/Dimensions";


class UploadTestScreen extends React.Component {
    

    /!*pickMultipleImages(){
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            console.log(images);
        });
    }*!/
    render() {
        launchImageLibrary = () => {
            let options = {
                storageOptions: {
                    skipBackup: true,
                    path: 'images',
                },
            };
            ImagePicker.launchImageLibrary(options, (response) => {
                console.log('Response = ', response);

                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                    alert(response.customButton);
                } else {
                    const source = { uri: response.uri };
                    console.log('response', JSON.stringify(response));
                    this.setState({
                        filePath: response,
                        fileData: response.data,
                        fileUri: response.uri
                    });
                }
            });

        }
        return (
            <View>
                <FormButton placeholderText={'Select Images'} onPress={this.upload.bind(this)}/>
            </View>
        )
    }
}



const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'grey',
        height: windowHeight,
        alignItems:'center',
        justifyContent: 'center',
        flex:1
    }
})

export default UploadTestScreen*/
