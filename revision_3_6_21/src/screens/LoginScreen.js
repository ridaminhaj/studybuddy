import { StatusBar } from "expo-status-bar";
import React, { useState, /*useContext*/ } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
/*
import {AuthContext} from "../navigation/AuthProvider";
*/

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailUpdate = (text) => setEmail(text)
    const handlePasswordUpdate = (text) => setPassword(text)
   /* const {login} = useContext(AuthContext);*/

    return (
        <View style={styles.container}>
            <Image source={require('../logo.png')} style={styles.logo}/>
            <Image source={require('../namebg.png')} style={styles.name}/>
            <StatusBar style="auto"/>
            <FormInput
                    placeholder="Email"
                    value={email}
                    onChangeText={handleEmailUpdate}
            />
            <FormInput
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={handlePasswordUpdate}
                />

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <FormButton buttonTitle='LOGIN' /*onPress{() => login(email, password)}*//>
            <View style={styles.space}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e6ddc5",
        alignItems: "center",
        justifyContent: "center",
    },
    logo:{
        flex:1,
        marginTop:150,
        height:100,
        width:300,
        resizeMode: 'contain',
        padding:20
    },
    /*logo: {
        marginTop: 100,
        height:400,
        width:100,
        aspectRatio:1
    },*/
    name:{
        aspectRatio:3,
        resizeMode:'contain',
        marginBottom: 40
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    space:{
        marginBottom:200
    }
});

