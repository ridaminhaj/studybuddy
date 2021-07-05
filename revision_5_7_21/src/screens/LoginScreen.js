import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Keyboard
} from "react-native";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
/*import { updateEmail, updatePassword, login } from '../actions/user'*/
import app from '../../api/FireBase';
import * as Authentication from './../../api/auth'
import { CommonActions } from "@react-navigation/native";
import * as PropTypes from "prop-types";

export default class LoginScreen extends React.Component {
    render() {
        let {navigation, route} = this.props;
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [isPasswordVisible, setIsPasswordVisible] = useState();
        const [isLoginLoading, setIsLoginLoading] = useState(false);

        /*handleLogin = () => {
            const { email, password } = this.state

            app.auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => this.props.navigation.navigate('Main'))
                .catch(error => console.log(error))*/

        /*this.props.login()
        this.props.navigation.navigate('Main')
    }*/
        const handleLogin = () => {

            Keyboard.dismiss();
            setIsLoginLoading(true);
            Authentication.signIn(
                {email, password},
                (user) => {
                    navigation.dispatch(CommonActions.reset({
                        index: 0,
                        routes: [{
                            name: "Main",
                            params: {name: user.displayName}
                        }]
                    }))
                },
                (error) => {
                    setIsLoginLoading(false);
                    return console.error(error);
                }
            ).then(r => {
            });
        }
        /*const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const handleEmailUpdate = (text) => {
            setEmail(text)
            this.setState({email})
        }
        const handlePasswordUpdate = (text) => {
            setPassword(text)
            this.setState({password})
        }*/
        /* const {login} = useContext(AuthContext);*/

        return (
            <View style={styles.container}>
                <Image source={require('../assets/logo.png')} style={styles.logo}/>
                <Image source={require('../assets/namebg.png')} style={styles.name}/>
                <StatusBar style="auto"/>
                <FormInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                />
                <FormInput
                    placeholder="Password"
                    secureTextEntry={isPasswordVisible}
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize={'none'}
                />

                <TouchableOpacity>
                    <Text style={styles.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>
                <FormButton buttonTitle='LOGIN'
                            onPress={() => handleLogin()} /*onPress{() => login(email, password)}*//>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={{color: 'green', marginTop: 20}}> Return to Homepage </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.space}/>
            </View>
        );
    }
}

LoginScreen.propTypes = {
    navigation: PropTypes.any,
    route: PropTypes.any
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

/*const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, login }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen)*/
