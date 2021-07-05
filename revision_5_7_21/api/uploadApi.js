import firebase from 'firebase';

export function addFile (file, addComplete, navigation) {
    firebase.firestore()
        .collection('FileTests')
        .add({
            image:file.image,
            doc: file.doc,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        }).then((snapshot) => snapshot.get())
        .then((fileData) => addComplete(fileData.data()))
        /*.then((res) => {
            this.setState({
                name: '',
                count: 0,
                module: 0,
                isLoading: false,
            });
        })
        */.catch((error) => console.log(error));
}

export async function getFiles(filesRetrieved){
    let fileList = [];

    let snapshot = await firebase.firestore()
        .collection('FileTests')
        .orderBy('createdAt')
        .get();

    snapshot.forEach((doc)=> {
        fileList.push(doc.data());
    })

    console.log(fileList);

    filesRetrieved(fileList);
}