import firebase from "firebase";
import React, {Component} from 'react';
import {View, Text, FlatList, Button, SafeAreaView, Image, ScrollView} from 'react-native';
import {addFile, getFiles} from "../../api/uploadApi";
import {Divider, ListItem} from "react-native-elements";

export default class UploadedFiles extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        fileList: [],
        currentFileItem: null,
        isLoading: 'false',
    }

    onFilesAdded = (file) => {
        this.setState(prevState => ({
            fileList: [...prevState.fileList, file]
        }));
    }

    onFilesReceived = (fileList) => {
        console.log(fileList);
        this.setState(prevState => ({
            fileList: prevState.fileList = fileList
        }))
    }

    componentDidMount () {
        getFiles(this.onFilesReceived).then(r => {});
    }

    storeUser() {
        {
            this.setState({isLoading: 'true'})
            firebase.firestore().collection('newnewnewtestfiles').add({
                image: this.state.image,
                doc: this.state.doc
            }).then(() => {
                this.setState({image: 'null'})
                this.setState({isLoading: false})
                this.setState({doc: 'null'})
            })
                .catch((err) => {
                    console.error("Error found: ", err);
                    this.setState({isLoading: false})
                });
        }
    }

    render () {
        const {doc} = this.props.route.params?.doc ?? 'defaultValue';
        const {image} = this.props.route.params?.image ?? 'defaultValue';
        console.log(this.props.route.params);
        console.log(doc);
        console.log(image);
        /*const {file, image} = this.props.route.params;*/
        return (
            <SafeAreaView>
            {/*<FlatList
                style={{width:400}}
                data = {this.state.fileList}
                ItemSeparatorComponent={() => <Divider style={{backgroundColor: 'black'}}/>}
                keyExtractor={(item, index) => index.toString()}
                renderItem = {({item}) => {
                    console.log(item);
                    return (
                        <ListItem
                            title = {item.name}
                            subtitle={item.module}
                            onPress={() => {}}
                        />
                    )
                }
                }
            />*/}
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={image}
                    renderItem={({ item }) => (
                        <Image
                            source={item.src}
                            style={{
                                width:260,
                                height:300,
                                borderWidth:2,
                                borderColor:'#d35647',
                                resizeMode:'contain',
                                margin:8
                            }}
                        />
                        )}
                        />
                <Button title="Press to Select Files" onPress={()=> this.props.navigation.navigate('Upload')}/>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                {doc && <Image source={{uri:doc}} style={{width:200, height: 200}}/>}
                <Button onPress={() => this.storeUser()}
                    /*addFile(
                        {
                            image: this.state.image,
                            doc: this.state.doc,
                        },
                        this.onFilesAdded
                    )}*/
                        title={"Press to Upload Selected Files"}
                />
                <FlatList
                    style={{width:400}}
                    data = {this.state.fileList}
                    ItemSeparatorComponent={() => <Divider style={{backgroundColor: 'black'}}/>}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={false}
                    renderItem = {({item}) => {
                        console.log(item);
                        return (
                            <Image
                                source={item.src}
                                style={{
                                    width:260,
                                    height:300,
                                    borderWidth:2,
                                    borderColor:'#d35647',
                                    resizeMode:'contain',
                                    margin:8
                                }}
                            />
                        )
                    }
                    }
                />
            </SafeAreaView>
        )
    }
}