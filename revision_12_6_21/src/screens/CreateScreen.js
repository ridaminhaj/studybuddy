import {Text, View, StyleSheet, Picker, LogBox} from 'react-native'
import React from 'react'
import FormInput from "../components/FormInput";
import {windowHeight} from "../utils/Dimensions";
import {useState} from "react";
// import {useDispatch} from "react-redux";
// import {assignName} from "../redux/reducers/reducer";
import {Button} from 'react-native-paper'
import * as PropTypes from "prop-types";
/*import firestore from '@react-native-firebase/firestore';*/
import firebase from '../../api/FireBase';
import RNPickerSelect from "react-native-picker-select";

class CreateScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            count: 0,
            isLoading: false,
            /*open: false,
            value: null,
            items: [1,2,3,4,5,6,7,8,9]*/
        };
    }
    /*setOpen(open) {
        this.setState({
            open
        });
    }

    setValue(callback) {
        this.setState(state => ({
            value: callback(state.value)
        }));
    }

    setItems(callback) {
        this.setState(state => ({
            items: callback(state.items)
        }));
    }*/

    storeUser() {
        if(this.state.name === ''){
            alert('Fill at least your group name!')
        } else {
            this.setState({
                isLoading: true,
            });
            firebase.firestore().collection('groups').add({
                name: this.state.name,
                count: this.state.count
            }).then((res) => {
                this.setState({
                    name: '',
                    count: 0,
                    isLoading: false,
                });
                this.props.navigation.navigate('Main')
            })
                .catch((err) => {
                    console.error("Error found: ", err);
                    this.setState({
                        isLoading: false,
                    });
                });
        }
    }

    render() {
        //const {open, value, items} = this.state;
        //let data = [{value:1}, {value:2}, {value:3}, {value: 4}, {value:5}, {value: 6}, {value: 7}, {value:8}, {value: 9}, {value:10},{value:11},{value:12},{value:13},{value:14},{value:15}]
        let {navigation} = this.props;
        let data = [['1','2','3','4']]

        //const dispatch = useDispatch()
        return (
            <View style={styles.container}>
                <Text style={{height: 40, marginTop: 20, color: 'white'}}> Create a new study group </Text>
                <FormInput
                    onChangeText={name => this.setState({name})}
                    value={this.state.name}
                    placeholder={'Name of Group'}
                />
                <View style = {styles.ddview}>
                <RNPickerSelect
                    onValueChange={count =>this.setState({count})}
                    placeholder={{label:'Select number of members'}}
                    items={[
                        { label: '5', value: 5 },
                        { label: '6', value: 6 },
                        { label: '7', value: 7 },
                        { label: '8', value: 8 },
                        { label: '9', value: 9 },
                    ]}
                />
                </View>
                {/*<Picker
                    selectedValue={this.state.count}
                    style={{ height: 50, width: 150 }}
                    onValueChange={count => this.setState({count})}
                    mode={'dialogue'}
                >
                    <Picker.Item label="5" value="5" />
                    <Picker.Item label="6" value="6" />
                    <Picker.Item label="7" value="7" />
                    <Picker.Item label="8" value="8" />
                    <Picker.Item label="9" value="9" />
                </Picker>*/}
                {/*<DropdownMenu
                    label={'Number of Members'}
                    bgColor={'red'}
                    tintColor={'white'}
                    data = {data}
                    />*/}
                {/*<FormInput
                    onChangeText={count => this.setState({count})}
                    value = {this.state.count}
                    placeholder={'Number of Members'}
                />*/}
                <Text>{this.state.name}</Text>
                <Text>{this.state.count}</Text>
                <Button onPress={() => this.storeUser()}>Submit</Button>
            </View>
        )
    }
}

CreateScreen.propTypes = {navigation: PropTypes.any}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'grey',
        height: windowHeight,
        alignItems:'center'
    },
    ddview: {
        width:"80%",
        backgroundColor:"#f6f3eb",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    }
})

export default CreateScreen