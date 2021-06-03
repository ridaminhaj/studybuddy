import {View, Image, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import FormButton from "../components/FormButton";


function HomeScreen ({navigation}) {
    return (
        <View style={styles.container}>
            <Image
                source={require('../logo.png')}
                style={styles.logo}
            />
            <Image source={require('../namebg.png')} style={styles.name}/>
            <View>
                <Text style={styles.slogan}>Your COMPLETE virtual study platform</Text>
            </View>
            <FormButton onPress={() => navigation.navigate('SignUp')} buttonTitle='Create an Account'/>
            <View style={styles.login}>
                <Text>Have an account?</Text>
                <Button title="Log In" onPress={() => navigation.navigate('LogIn')}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        flex:1,
        flexShrink:1,
        backgroundColor: "#e6ddc5",
        justifyContent:'space-between',
        alignItems: 'center'

    },
    logo:{
        flex:1,
        marginTop:60,
        height:100,
        width:170,
        resizeMode: 'contain',
        padding:20
    },
    name:{
        aspectRatio:3,
        resizeMode:'contain'
    },
    /*name:{
        flex:0.5,
        resizeMode:'contain',
        aspectRatio:2,
        padding:20
    },*/
    slogan:{
        fontFamily:'Courier New',
        fontWeight:'bold',
        padding:10,
        marginBottom:40
    },
    login:{
        flex:2,
        marginBottom:30,
        padding:20,
        flexWrap:'wrap',
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

export default HomeScreen;