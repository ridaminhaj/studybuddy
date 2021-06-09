import {Text, View, StyleSheet, Button} from 'react-native'
import React from 'react'
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import win from "react-native-web/dist/exports/Dimensions";
import {windowHeight} from "../utils/Dimensions";

export default class CreateScreen extends React.Component {
    state = {
        gname: '',
        mcount: 0
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{height: 40, marginTop: 20, color: 'white'}}> Create a new study group </Text>
                <FormInput
                    onChangeText={gname => this.setState({gname})}
                    value = {this.state.gname}
                    placeholder={'Name of Group'}
                />
                <FormInput
                    onChangeText = {mcount => this.setState({mcount})}
                    value = {this.state.mcount}
                    placeholder={'Number of Members'}
                />
            </View>
        )

    }
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'grey',
        height: windowHeight,
        alignItems:'center'
    }
})

export default CreateScreen