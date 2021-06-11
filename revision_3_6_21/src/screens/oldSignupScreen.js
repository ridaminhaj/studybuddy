import React, {useState} from 'react';
import {
    Image,
    TextInput,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    View,
    ScrollView
} from 'react-native';


function SignUp (){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(false);

    const handleNameUpdate = (text) => setName(text)
    const handleEmailUpdate = (text) => setEmail(text)
    const handlePasswordUpdate = (text) => setPassword(text)
    const handleButtonPress = () => {
        setName('')
        setEmail('')
        setPassword('')
        setIsSignedUp(true)
    }

    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.container}>
            <Image style={styles.logo} source={require('./logo.png')} />
            <Image source={require('./namebg.png')} style={styles.name} />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Username"
                    onChangeText={handleNameUpdate}
                    value={name}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    onChangeText={handleEmailUpdate}
                    value={email}
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    onChangeText={handlePasswordUpdate}
                    value={password}
                    secureTextEntry
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={handleButtonPress}
            >
                <Text>Sign Up</Text>
            </TouchableOpacity>
            {isSignedUp ? (
                <ScrollView>
                    <Text style={styles.result}>Sign Up Successful!</Text>
                </ScrollView>
            ) : null}
            <View style={{marginBottom:220}}/>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#e6ddc5"
    },
    logo:{
        flex:1,
        marginTop:60,
        height:100,
        width:100,
        resizeMode: 'contain',
        padding:20
    },
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
    textInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    entry: {
        flex:4
    },

    button: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#97572b"
    },
    result: {
        height:"100%",
        fontSize: 35,
        color: 'green',
        padding:30
    },
});

export default SignUp