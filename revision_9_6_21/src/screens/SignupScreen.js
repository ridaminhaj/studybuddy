import React/*, {useState, /!*useContext*!/}*/ from 'react';
import {
    Image,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, signup } from "../redux/actions/user";
import app from '../../api/FireBase';

export default class SignupScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        name: '',
        email: '',
        password: ''
    }
        handleSignUp = () => {
            const { email, password } = this.state

            app.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => this.props.navigation.navigate('Main'))
                .catch(error => console.log(error))
        }
            /*this.props.signup()
            this.props.navigation.navigate('Main')
        }*/
        render() {
        return (
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.container}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
                <Image source={require('../assets/namebg.png')} style={styles.name}/>
                <View style={styles.inputView}>
                    <FormInput
                        placeholder="Username"
                        onChangeText={name => this.setState({name})}
                        value={this.state.name}
                    />
                </View>
                <View style={styles.inputView}>
                    <FormInput
                        placeholder="Email"
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                        keyboardType="email-address"
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.inputView}>
                    <FormInput
                        placeholder="Password"
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                        secureTextEntry
                    />
                </View>
                <FormButton
                    onPress={this.handleSignUp}
                    buttonTitle='Create an Account'
                />
                {/*isSignedUp? (
                    <ScrollView>
                        <Text style={styles.result}>Sign Up Successful!</Text>
                    </ScrollView>
                ) : null*/}
                <View style={{marginBottom: 40}}/>

                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={{color:'green', marginBottom: 180}}> Return to Homepage </Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        )
    }
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
