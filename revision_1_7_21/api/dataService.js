/*
import firestore from '@react-native-firebase/firestore';
import * as Authentication from './auth';
import firebase from "./firebase";
import * as Firebase from 'firebase';
import { useState } from 'react';

export async function createGroup(data) {
    if (!(data && (typeof data === 'object'))) {
        return false;
    }
    const db = firebase.firestore();
    const doc = db.collection('groups').doc();

    const id = doc.id;
    const newid = db.collection('group').doc(id);
    const uid = Authentication.getCurrentUserId();
    await doc.set({
        id,
        uid,
        members : '',
        ...data
    })
    await doc.update({members: Firebase.firestore.FieldValue.arrayUnion(uid)})
    await newid.set({
        id,
        uid,
        members : '',
        ...data
    })
    await newid.update({members: Firebase.firestore.FieldValue.arrayUnion(uid)})


    const userDoc = await db.collection('users').doc(uid)
    userDoc.update({groups: Firebase.firestore.FieldValue.arrayUnion(id)}).then(() => {console.log('user update groups success')}).catch((error) => {console.log('user update groups failed')});



}

export async function joinGroup(data) {
    if (!(data && (typeof data === 'object'))) {
        return false;
    }
    const id = data.id;


    const uid = Authentication.getCurrentUserId();
    let member = await firebase.firestore().collection('groups').doc(id)
    member.update({members: Firebase.firestore.FieldValue.arrayUnion(uid)}).then(() => {console.log('user update groups success')}).catch((error) => {console.log('user update groups failed')});
    member.get().then((Ref) => {
        if (Ref.data()) {



            member.update({vacancy: Ref.data().vacancy - 1})
            member.update({available: Ref.data().vacancy <= 1 ? false : true})
            member.update({join: true})
            console.log("member update")
        } else {

        }

    }).catch((error) => {})

    let members = await firebase.firestore().collection('group').doc(id)
    members.update({members: Firebase.firestore.FieldValue.arrayUnion(uid)}).then(() => {console.log('user update groups success')}).catch((error) => {console.log('user update groups failed')});
    members.get().then((Ref) => {
        if (Ref.data()) {



            members.update({vacancy: Ref.data().vacancy - 1})
            members.update({available: Ref.data().vacancy <= 1 ? false : true})
            members.update({join: true})
            console.log("members update")
        } else {

        }

    }).catch((error) => {})

    const userDoc = await firebase.firestore().collection('users').doc(uid)
    userDoc.update({groups: Firebase.firestore.FieldValue.arrayUnion(id)}).then(() => {console.log('user update groups success')}).catch((error) => {console.log('user update groups failed')});

    /!* const userDoc = await firebase.firestore().collection('users').doc(uid)
     userDoc
       .get()
       .then((docRef) => {
         if (docRef.data()) {

         let groups = docRef.data().groups;
           if (typeof groups === 'string') {
             let groupsArray = groups ? groups.split(',') : [];
             if (groupsArray?.length >= 0) {
               groupsArray.push(id);
               groups = groupsArray.join(',');
             } else {
               groups = String(id);
             }
           }

           userDoc.update({
             groups: groups
           }).then(() => {console.log('user update groups success')}).catch((error) => {console.log('user update groups failed')});
         }
       })
       .catch((error) => { });
   *!/
}

export function getGroups(onFinish) {
    if((typeof onFinish !== 'function')){
        return false;
    }
    const uid = Authentication.getCurrentUserId();
    firebase.firestore()
        .collection('group')
        .where('members', "array-contains", uid)
        .get()
        .then(querySnapshot => {

            let groups = [];
            querySnapshot.forEach(documentSnapshot => {
                // console.log('group ID: ', documentSnapshot.id, documentSnapshot.data());
                groups.push(documentSnapshot.data());
                groups.sort(x => x.meetingDate)
            });
            onFinish(groups);
        })
        .catch((error) => {
            console.log('get groups error: ', error);
        })
}

export function getOtherGroups(onFinish) {
    const uid = Authentication.getCurrentUserId();
    firebase.firestore()
        .collection('group').where('members', "array-contains", uid).get()
        .then(querySnapshot => {
            let groups = [];
            let gg = [];
            querySnapshot.forEach(documentSnapshot => {
                groups.push(documentSnapshot.data().id);
                // groups.sort(x => x.meetingDate)
            })
            firebase.firestore().collection('group').where('available', "==", true).get()
                .then(querySnapshot => {
                    let group = [];
                    querySnapshot.forEach(documentSnapshot => {
                        group.push(documentSnapshot.data().id);
                        // group.sort(x => x.meetingDate)
                    })
                    let difference = group.filter(x => !groups.includes(x));
                    difference.forEach(x =>
                        firebase.firestore().collection('group').where('id', "==", x ).get()
                            .then(querySnapshot => {
                                querySnapshot.forEach(t => {
                                    gg.push(t.data());
                                });
                                gg.sort((a,b) => a.meetingDate > b.meetingDate)
                                onFinish(gg);
                            })
                            .catch((error) => {
                                console.log('get groups error: ', error);
                            })
                    )})
                .catch((error) => {
                    console.log('get groups error: ', error);
                })
            // onFinish(gg);
        })
        .catch((error) => {
            console.log('get groups error: ', error);
        })




    /!* const allgroup = async () => { await firebase.firestore().collection('group').get()
     .then(querySnapshot => {

       let group = [];

       querySnapshot.forEach(documentSnapshot => {
         group.push(documentSnapshot.data().id);

         group.sort(x => x.meetingDate)

       })

      return group;
     })
   .catch((error) => {
     console.log('get groups error: ', error);
   }) }


   let difference = allgroup().filter(x => !mygroup().includes(x)); *!/



}




export function getGroupData(docId, onFinish) {
    if(!(docId && typeof docId === 'string')){
        return false;
    }
    const uid = Authentication.getCurrentUserId();
    firebase.firestore()
        .collection('groups')
        .doc(docId)
        .get()
        .then(doc => {
            const group = doc?.data?.() ?? null;

            if(group){
                onFinish(group);
            }
        })
        .catch((error) => {
            console.log('get groups error: ', error);
        })
}

export function getFilename(onFinish, docid) {
    if((typeof onFinish !== 'function')){
        return false;
    }
    const uid = Authentication.getCurrentUserId();
    firebase.firestore()
        .collection('groups')
        .doc(docid).collection('resources')
        .get()
        .then(querySnapshot => {

            let filename = [];
            querySnapshot.forEach(documentSnapshot => {
                console.log('group ID: ', documentSnapshot.id, documentSnapshot.data());
                filename.push(documentSnapshot.data());

            });
            onFinish(filename);
        })
        .catch((error) => {
            console.log('get groups error: ', error);
        })
}
*/
