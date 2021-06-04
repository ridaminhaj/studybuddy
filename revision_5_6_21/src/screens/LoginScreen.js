import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login } from '../actions/user'

class LoginScreen extends React.Component {
    state = {
        email: '',
        password:''
    }
    handleLogin = () => {
        this.props.login()
        this.props.navigation.navigate('Main')
    }
    render() {
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
                <Image source={require('../logo.png')} style={styles.logo}/>
                <Image source={require('../namebg.png')} style={styles.name}/>
                <StatusBar style="auto"/>
                <FormInput
                    placeholder="Email"
                    value={this.props.user.email}
                    onChangeText={email => this.updateEmail(email)}
                    autoCapitalize='none'
                />
                <FormInput
                    placeholder="Password"
                    secureTextEntry={true}
                    value={this.props.user.password}
                    onChangeText={password => this.props.updatePassword(password)}
                />

                <TouchableOpacity>
                    <Text style={styles.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>
                <FormButton buttonTitle='LOGIN' onPress={this.handleLogin} /*onPress{() => login(email, password)}*//>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={{color:'green', marginTop: 20}}> Return to Homepage </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.space}/>
            </View>
        );
    }
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

const mapDispatchToProps = dispatch => {
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
)(LoginScreen)
