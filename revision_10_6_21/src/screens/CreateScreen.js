import {Text, View, StyleSheet} from 'react-native'
import React from 'react'
import FormInput from "../components/FormInput";
import {windowHeight} from "../utils/Dimensions";
import {useState} from "react";
// import {useDispatch} from "react-redux";
// import {assignName} from "../redux/reducers/reducer";
import {Button} from 'react-native-paper'
import * as PropTypes from "prop-types";
/*import firestore from '@react-native-firebase/firestore';*/
import firebase from '../../api/FireBase';

class CreateScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isLoading: false
        };
    }
    storeUser() {
        if(this.state.name === ''){
            alert('Fill at least your group name!')
        } else {
            this.setState({
                isLoading: true,
            });
            firebase.firestore().collection('groups').add({
                name: this.state.name
            }).then((res) => {
                this.setState({
                    name: '',
                    isLoading: false,
                });
                this.props.navigation.navigate('Main')
            })
                .catch((err) => {
                    console.error("Error found: ", err);
                    this.setState({
                        isLoading: false,
                    });
                });
        }
    }

    render() {
        let {navigation} = this.props;

        //const dispatch = useDispatch()
        return (
            <View style={styles.container}>
                <Text style={{height: 40, marginTop: 20, color: 'white'}}> Create a new study group </Text>
                <FormInput
                    onChangeText={name => this.setState({name})}
                    value={this.state.name}
                    placeholder={'Name of Group'}
                />
                <FormInput
                    onChangeText={mcount => this.setState({mcount})}
                    value = {this.state.mcount}
                    placeholder={'Number of Members'}
                />
                <Text>{this.state.name}</Text>
                <Button onPress={() => this.storeUser()}>Submit</Button>
            </View>
        )
    }
}

CreateScreen.propTypes = {navigation: PropTypes.any}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'grey',
        height: windowHeight,
        alignItems:'center'
    }
})

export default CreateScreen