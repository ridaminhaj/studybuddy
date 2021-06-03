import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";

function LogIn() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleNameUpdate = (text) => setName(text)
    const handlePasswordUpdate = (text) => setPassword(text)

    return (
        <View style={styles.container}>
            <Image source={require('./logo.png')} style={styles.logo}/>
            <Image source={require('./namebg.png')} style={styles.name} />
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Username"
                    placeholderTextColor="#000000"
                    value = {name}
                    onChangeText={handleNameUpdate}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#000000"
                    secureTextEntry={true}
                    value = {password}
                    onChangeText={handlePasswordUpdate}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
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
        marginTop:60,
        height:100,
        width:100,
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
    inputView: {
        backgroundColor: "#f6f3eb",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#97572b",
        marginBottom: 250
    },
    buttonText:{
        color:'white'
    }
});
export default LogIn;