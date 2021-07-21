
import Documentpicker from "../components/Documentpicker";
import React, {useState} from 'react';
import { Image, SafeAreaView, StatusBar, View, Text, StyleSheet, FlatList  } from 'react-native';


import {Button} from 'react-native-paper'
import firebase from './../../api/firebase'

import {getFilename} from "../../api/dataService";


export default Upload = ({navigation, route}) =>{

  const [filename, setFilename] = useState('');
  const post = route?.params?.post;
  const Ref = firebase.firestore().collection('groups').doc(post?.id).collection('resources')
    React.useEffect(() => {
        getFilename(function(filename){
            
           setFilename(filename);
        }, post?.id)
    }, [])
    

    const renderPost = post => {
        return (
            <View style={styles.feedItem}>
                
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                       

                        <Button icon="eye"  mode = 'compact' color="purple" onPress = {() => navigation.navigate("Tab", {post: post})} />
                    </View>
                   
                </View>
            </View>
        );
    };

 
        return (
          <SafeAreaView>
            <View style={styles.container}>
            
                <FlatList
                    style={styles.feed}
                    data={filename}
                    renderItem={({ item }) => renderPost(item)}
                    keyExtractor = {item => item.id}
                    showsVerticalScrollIndicator={false}
                >
                 
                </FlatList>
               
            </View>
            <Documentpicker filename = {filename} setFilename = {setFilename}></Documentpicker>
            
             </SafeAreaView>
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



