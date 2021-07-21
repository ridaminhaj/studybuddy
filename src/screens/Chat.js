
import React, { useState, useEffect, useCallback } from 'react'
import { GiftedChat , Bubble,Actions,
    ActionsProps,} from 'react-native-gifted-chat'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { StyleSheet, TextInput, View, Image, Button, Text, ImageBackground} from 'react-native'
import * as Firebase from 'firebase'
import  firebase from './../../api/firebase'
import { LogBox } from 'react-native';
import * as Authentication from './../../api/auth'

LogBox.ignoreLogs(['Setting a timer']);
LogBox.ignoreLogs(['Encountered two children']);


export default Chat = ({navigation, route, ...props}) => {
    const post = route?.params?.post;
    
    const [image,setImage] = useState('h')
    const chatsRef = firebase.firestore().collection('groups').doc(post?.id).collection('chats')
  let Image_URL = "https://images.unsplash.com/photo-1501254212636-6c9a740bc2d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=562&q=80"
    const [user, setUser] = useState(null)
    const [name, setName] = useState(Authentication.getCurrentUserName())
    const [messages, setMessages] = useState([])
    const [join,setJoin] = useState(false)
    const[uid, setUid] = useState(Authentication.getCurrentUserId())
    useEffect(() => {
     const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
            const messagesFirestore = querySnapshot
                .docChanges()
                .filter(({ type }) => type === 'added')
                .map(({ doc }) => {
                    const message = doc.data()
                   
                    return { ...message, createdAt: message.createdAt.toDate() }
                })
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
            appendMessages(messagesFirestore)
        })
        return () => unsubscribe()
    }, [])

    const appendMessages = useCallback(
        (messages) => {
            setMessages((previousMessages) => GiftedChat.append(previousMessages, messages))
        },
        [messages]
    )

 
  
    async function handleSend(messages) {
       
        const writes = messages.map((m) => chatsRef.add(m))
        await Promise.all(writes)

        
        
    }

    firebase.firestore().collection('users').doc(Authentication.getCurrentUserId()).get().then(value => setImage(value.data().profilepic))

  
    
  
    return (
    <View >
            <ImageBackground source={{uri:Image_URL}} style={{width: '100%', height: '100%'}} >
    <GiftedChat  messages={messages}  user={{_id: uid , name: name}} onSend={handleSend}
    renderBubble ={props => {
        return (
          <Bubble
            {...props}
  
            textStyle={{
              right: {
                color: 'black',
                
              },
              left: {
                color: 'black',
               
              },
            }}
            wrapperStyle={{
              left: {
                backgroundColor: '#E6F5F3',
              },
              right: {
                backgroundColor: "#FDB1F3",
              },
            }}
           
          />
        );
      }}              ></GiftedChat>
   </ImageBackground>
    </View>
    )
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    }, 
    backgroundImage:{
        width:320,
        height:480,
      },
    input: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderColor: 'gray',
    },
})