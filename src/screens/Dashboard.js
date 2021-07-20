import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import {Button} from 'react-native-paper'
import firebase from './../../api/firebase'
import moment from "moment";
import { getGroups } from "../../api/dataService";
import * as Authentication from './../../api/auth';

export default Dashboard = ({navigation, routes, ...props}) => {


    const [groups, setGroups] = React.useState(null);

    React.useEffect(() => {
        getGroups(function(groups){
            
            Array.isArray(groups) && groups.length > 0 && setGroups(groups);
        })
    }, [])
    
    const remove = (post) => {const uid = Authentication.getCurrentUserId();
        firebase.firestore().collection('group').doc(post).get().then(query => {query.forEach(document => {
            document.data().module
        })})
    }

    const renderPost = post => {
        return (
            <View style={styles.feedItem}>
                
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>{post.module}</Text>
                            <Text style={styles.timestamp}>{post?.meetingDate + ' ' +  post?.startTime + '-' + post?.endTime}</Text>
                        </View>

                        <Button icon="eye"  mode = 'compact' color="purple" onPress = {() => navigation.navigate("Tab", {post: post})} />
                      
                    </View>
                   
                </View>
            </View>
        );
    };

 
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Your group list</Text>
                </View>

                <FlatList
                    style={styles.feed}
                    data={groups? groups.sort((a,b) => 
                        moment(new Date(a.meetingDate)) - moment(new Date(b.meetingDate)) != 0 ?
                        moment(new Date(a.meetingDate)) - moment(new Date(b.meetingDate)) :
                        a.startTime.localeCompare(b.startTime) != 0 ?
                        a.startTime.localeCompare(b.startTime) :
                        a.module.localeCompare(b.module))
                        
                        : groups}
                    renderItem={({ item }) => renderPost(item)}
                    
                    showsVerticalScrollIndicator={false}
                ></FlatList>
            </View>
        );
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EBECF4"
    },
    header: {
        paddingTop: 64,
        paddingBottom: 16,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#EBECF4",
        shadowColor: "#454D65",
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "500"
    },
    feed: {
        marginHorizontal: 16
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    
    name: {
        fontSize: 15,
        fontWeight: "500",
        color: "#454D65"
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    post: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
    },
  
});


