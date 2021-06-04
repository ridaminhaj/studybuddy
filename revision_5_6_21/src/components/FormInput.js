import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

export default function FormInput({labelValue, placeholderText, ...rest}){
    return (
        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                {...rest}
            />
            </View>
    );
}


const styles = StyleSheet.create({
        inputView:{
            width:"80%",
            backgroundColor:"#f6f3eb",
            borderRadius:25,
            height:45,
            marginBottom:20,
            justifyContent:"center",
            padding:20
        },

    TextInput: {
        height: 50,
        paddingBottom:0,
        marginLeft: 20,
        alignContent: 'center',
        justifyContent: 'center'
    },
})