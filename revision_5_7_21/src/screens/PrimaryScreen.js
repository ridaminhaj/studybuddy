import {Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {windowWidth} from "../utils/Dimensions";
import FormButton from "../components/FormButton";
import * as PropTypes from "prop-types";
import firebase from '../../api/FireBase'
import * as Authentication from './../../api/auth';
import {CommonActions} from "@react-navigation/routers";
/*
import * as PropTypes from "prop-types";
*/

function PrimaryScreen({navigation}) {
    /*const [image,setImage] = useState('h')
    const[cover,setCover] = useState('h')/!*
    firebase.firestore().collection('users').doc(Authentication.getCurrentUserId()).get().then(value => setImage(value.data().profilepic))
    firebase.firestore().collection('users').doc(Authentication.getCurrentUserId()).get().then(value => setCover(value.data().coverpic))*!/*/
    const handleLogout = () => {


        Authentication.signOut(
            () => navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{name: "Login"}]
            })),
            console.error
        ).then(r =>{});
    }
    return (
        //<SafeAreaView style={styles.container}>
            /*<ImageBackground style = {{width: '100%', height: '50%', flex: 0.1}} source = {{uri:cover}}>
                <Text onPress = {() => navigation.navigate('CoverPic')}  style = {styles.cover}>Change cover photo?</Text>
                <View style = {styles.container}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProfilePic')}>
                        <Image
                            style ={styles.image}
                            source={ {uri:image
                            }

                            }/>
                    </TouchableOpacity>
                </View>

            </ImageBackground>*/
        <View style={styles.container}>
            <View style={styles.logoholder}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    //replace with calendar later
                />
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image
                        source={require('../assets/profile.png')}
                        style={styles.profile}
                    />
                </TouchableOpacity>
            </View>
            <FormButton buttonTitle={'Your Study Groups'} onPress={() => navigation.navigate('List')}/>
            <FormButton buttonTitle={'Join a Group'} onPress={() => navigation.navigate('Join')}/>
            <FormButton buttonTitle={'Create a Study Group'} onPress={() => navigation.navigate('Create')}/>
            <TouchableOpacity style={{marginBottom: 80}} onPress={() => handleLogout()}>
                <Text style={{color: 'green'}}>LOG OUT</Text>
            </TouchableOpacity>
        </View>
        //</SafeAreaView>
    );
}

PrimaryScreen.propTypes = {navigation: PropTypes.any}

/*PrimaryScreen.propTypes = {navigation: PropTypes.any}*/

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        flex:1,
        flexShrink:1,
        backgroundColor: "#e6ddc5",
        justifyContent:'space-between',
        alignItems: 'center'

    },
    logoholder:{
        flexDirection:'row',
        justifyContent: 'space-around',
        width: windowWidth
    },
    logo:{
        marginTop:60,
        height:100,
        width:80,
        resizeMode: 'contain',
        padding:20,
    },
    profile:{
        alignItems: 'flex-end',
        marginTop: 60,
        height: 80,
        resizeMode: 'contain'
    },

    text:{
        flex:1,
        aspectRatio: 1,
        height:50,
        marginBottom: 40,
        justifyContent: 'center'

    }
})

/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#e6ddc5",
        alignItems: 'center'
    },
    logo: {
        flex:1,
        marginTop: 0,
        height:400,
        width:400,
        aspectRatio:1,
        resizeMode:'contain',
        padding:20
    },
    name:{
        aspectRatio:3,
        resizeMode:'contain',
        padding:20
    },
    slogan:{
        fontFamily:'Courier New',
        fontWeight:'bold'
    },
    create: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: '#97572b',
        marginBottom: 20,
        padding:20
    },
    buttonText:{
        color:'white'
    },
    login:{
        color: 'black',
        flexDirection:'row',
        marginBottom:0,
        justifyContent:'space-between',
        padding:20
    }
})
*/

export default PrimaryScreen;