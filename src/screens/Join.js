import React , {useEffect, useState}from "react";
import { View, Text, StyleSheet, Image, FlatList, Alert, SearchBar } from "react-native";
import {Button} from 'react-native-paper'
import {  getOtherGroups, joinGroup } from "../../api/dataService";
import { CommonActions } from "@react-navigation/routers";

export default Dashboard = ({navigation, routes, ...props}) => {
const [data,setData] = useState(null)
const [value, setValue] = useState(null);
    const [groups, setGroups] = React.useState(null);

    useEffect(() => {
        getOtherGroups(function(groups){
         Array.isArray(groups) && groups.length > 0 && setGroups(groups);
        
        })
    }, [])

    

    const renderPost = post => {
        return (
            <View style={styles.feedItem}>
                
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>{post?.module}</Text>
                            <Text style={styles.timestamp}>{post?.meetingDate + ' ' +  post?.startTime + '-' + post?.endTime}</Text>
                        </View>

                        <Button  icon = 'account-plus' mode = 'compact' color="purple" onPress = {() => {joinGroup(post) , Alert.alert("You have join the group " + post?.module ), navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [ {name: "Home"}]
      })) 
       
        
    
                        }} />
                    </View>
                   
                </View>
            </View>
        );
    };

    

 
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Join a group </Text>
                </View>

                <FlatList
                    style={styles.feed}
                    data={groups}
                    renderItem={({ item }) => renderPost(item)}
                    keyExtractor = {item => item.id}
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


