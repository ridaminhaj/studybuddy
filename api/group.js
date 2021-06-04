import firebase from './firebase'


export function createGroup(group) {
    firebase.firestore().collection('Groups').add({
        name: group.name,
        date: group.date,
        starttime: group.starttime,
        endtime: group.endtime,
        pax: group.pax,
        link: group.link,
        code:group.code,
        password:group.password
});
}

