import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
//import{windowHeight, windowWidth} from '../utils/Dimensions';

export default function FormButton({buttonTitle, ...rest}){
return(
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
        <Text style = {styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
);
}

const styles = StyleSheet.create({
    buttonContainer:{
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#97572b'
    },
    buttonText:{
        color:'white'
    },
})
