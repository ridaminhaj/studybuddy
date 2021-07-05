import React, {useState} from 'react';
import {
    Image,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    View,
    TouchableOpacity,
    Text,
    Keyboard
} from 'react-native';
import { CommonActions } from "@react-navigation/native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import * as Authentication from "../../api/auth";
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import { updateEmail, updatePassword, signup } from "../redux/actions/user";
import app from '../../api/FireBase';

export default function SignupScreen ({navigation, route}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSignedUp, setIsSignedUp] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isRegisterLoading, setIsRegisterLoading] = useState(false);
    const handlePasswordVisible = (boolean) => setIsPasswordVisible(boolean)

    const handleRegister = () => {
        Keyboard.dismiss();
        setIsRegisterLoading(true);
        Authentication.createAccount(
            {name, email, password},
            (user) => {
                setIsRegisterLoading(false);
                navigation.dispatch(CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: "Main",
                            params: {
                                name: user.displayName,
                                email: user.email
                            }
                        }]
                }))
            },
            (error) => {
                setIsRegisterLoading(false);
                console.error(error);
            }
        ).then(r =>{}) ;
    }
    /*constructor(props) {
        super(props);
    }
    state = {
        name: '',
        email: '',
        password: ''
    }*/
        /*const handleSignUp = () => {
            const { email, password } = this.state

            app.auth()
                .createUserWithEmailAndPassword(email, password)
/!*
                firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({name, email,password})
*!/
                .then(() => this.props.navigation.navigate('Main'))
                .catch(error => console.log(error))
        }*/
            /*this.props.signup()
            this.props.navigation.navigate('Main')
        }*/
        return (
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.container}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
                <Image source={require('../assets/namebg.png')} style={styles.name}/>
                <View style={styles.inputView}>
                    <FormInput
                        placeholder="Username"
                        onChangeText={setName}
                        value={name}
                    />
                </View>
                <View style={styles.inputView}>
                    <FormInput
                        placeholder="Email"
                        onChangeText={setEmail}
                        value={email}
                        keyboardType="email-address"
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.inputView}>
                    <FormInput
                        placeholder="Password"
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                    />
                </View>
                <FormButton
                    onPress={() => handleRegister()}
                    buttonTitle='Create an Account'
                />
                {/*isSignedUp? (
                    <ScrollView>
                        <Text style={styles.result}>Sign Up Successful!</Text>
                    </ScrollView>
                ) : null*/}
                <View style={{marginBottom: 40}}/>

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={{color:'green', marginBottom: 180}}> Return to Homepage </Text>
                    </TouchableOpacity>
                </View>

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

/*
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, signup }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupScreen)*/
