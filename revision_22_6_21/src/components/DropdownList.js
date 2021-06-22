import React from 'react'
import {Text, View} from 'react-native'
import {Dropdown} from 'react-native-material-dropdown'

/*const {
    Select,
    Option,
    OptionList,
    updatePosition
} = DropDown;*/

class DropdownList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            canada: ''
        };
    }

    componentDidMount() {
        updatePosition(this.refs['SELECT1']);
        updatePosition(this.refs['OPTIONLIST']);
    }

    _getOptionList() {
        return this.refs['OPTIONLIST'];
    }


    _canada(province) {

        this.setState({
            ...this.state,
            canada: province
        });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Select
                    width={250}
                    ref="SELECT1"
                    optionListRef={this._getOptionList.bind(this)}
                    defaultValue="Select a Province in Canada ..."
                    onSelect={this._canada.bind(this)}>
                    <Option>Alberta</Option>
                    <Option>British Columbia</Option>
                    <Option>Manitoba</Option>
                    <Option>New Brunswick</Option>
                    <Option>Newfoundland and Labrador</Option>
                    <Option>Northwest Territories</Option>
                    <Option>Nova Scotia</Option>
                    <Option>Nunavut</Option>
                    <Option>Ontario</Option>
                    <Option>Prince Edward Island</Option>
                    <Option>Quebec</Option>
                    <Option>Saskatchewan</Option>
                    <Option>Yukon</Option>
                </Select>

                <Text>Selected province of Canada: {this.state.canada}</Text>

                <OptionList ref="OPTIONLIST"/>
            </View>
        );
    }
}
