import {FlatList, Text, View} from 'react-native'
import React from 'react';
import {getGroups} from "../../api/dataService";

class JoinScreen extends React.Component {

    onGroupsReceived = (groupList) => {
        console.log(groupList);
        this.setState(prevState => ({
            groupList: prevState.groupList = groupList
        }))
    }

    componentDidMount() {
        getGroups(this.onGroupsReceived);
    }

    render() {

        return (
            <View>
                <Text> Available Groups </Text>
            </View>
        )

    }
}

export default JoinScreen