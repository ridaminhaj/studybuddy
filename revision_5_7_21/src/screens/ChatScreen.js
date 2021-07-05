import {Text, View} from 'react-native'
import React from 'react'
import {StyleSheet} from "react-native";
import {windowHeight, windowWidth} from "../utils/Dimensions";

class ChatScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> User Information </Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDEEE8'/*#c0c3dc #dbdce5*/,
        height:windowHeight,
        width:windowWidth
    }
})

export default ChatScreen