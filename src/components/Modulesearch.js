//still under test
import React, {useState,Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar} from 'react-native'
import SearchInput, { createFilter } from 'react-native-search-filter';
import email from './../../email';


export default Modulesearch = (props) => {
    const KEYS_TO_FILTERS = ['user.name', 'subject'];
    const [searchTerm, searchUpdated] = useState('')
    const filteredEmails = email.filter(createFilter(searchTerm, KEYS_TO_FILTERS))
    return(
      <View style = {styles.container}>
         <SearchInput 
          onChangeText={(term) => { searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Type a message to search"
          />
        <ScrollView>
          {filteredEmails.map(email => {
            return (
              <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
                <View>
                  <Text>{email.user.name}</Text>
                  <Text style={styles.emailSubject}>{email.subject}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
</View>
    )
};

const styles = StyleSheet.create({
      container: {
          paddingTop: StatusBar.currentHeight? StatusBar.currentHeight : 0,
          alignItems: 'center'
      },
      emailItem:{
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.3)',
        padding: 10
      },
      emailSubject: {
        color: 'rgba(0,0,0,0.5)'
      },
      searchInput:{
        padding: 10,
        borderColor: '#CCC',
        borderWidth: 1
      }
    
  })

 