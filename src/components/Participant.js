import { View, StyleSheet, StatusBar, Text} from "react-native";
import {Picker} from '@react-native-community/picker'
import React, {useState} from 'react'

export default Participant = (props) => {
    const [selectedValue, setSelectedValue] = useState(1);
    const hello = [
        {label: "Please choose participant" , value: 0},
        { label: "5", value: 5 },
        { label: "10", value: 10},
        { label: "15", value: 15 },
        { label: "20", value: 20 },
      ];

    return(
      <View style={styles.container} >
          <Text >Member no:</Text>
          <Picker 
          selectedValue={selectedValue}
          style={{ height: 50, width: 260 }}
          onValueChange={(itemValue, itemIndex) => 
          {if (itemValue != 0) {setSelectedValue(itemValue)}
        }
    }
        >
      {hello.map(({ label, value }) => <Picker.Item  key = {label} label={label} value={value} />)}
         </Picker>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight? StatusBar.currentHeight : 0,
    alignItems: 'center',
    marginTop: -40,
    flexDirection: 'row',
  }
});
