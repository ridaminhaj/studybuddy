import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import * as PropTypes from "prop-types";

class PrimaryScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../logo.png')}
                    style={styles.logo}
                />
                <Image source={require('../namebg.png')} style={styles.name}/>
                <View style={styles.text}>
                    <Text style={{fontFamily: 'Times New Roman', color: 'red'}}> Welcome!</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{marginBottom: 80}}>
                    <Text style={{color: 'green'}}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

PrimaryScreen.propTypes = {navigation: PropTypes.any}
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
    text:{
        flex:1,
        aspectRatio: 1,
        height:50,
        marginBottom: 40,
        justifyContent: 'center'

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

export default PrimaryScreen;