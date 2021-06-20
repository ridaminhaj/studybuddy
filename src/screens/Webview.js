import React, { Component } from 'react';
import { Linking, StatusBar} from 'react-native';
import {WebView} from 'react-native-webview'

export default Webview = ({navigation, route}) =>  {
    const post = route?.params?.post;
    const uri = post?.zoomLink;
  
    return (
    
      <WebView
        ref={(ref) => { webview = ref; }}
        source={{uri}}
        onNavigationStateChange={(event) => {
          if (event.url !== uri) {
            webview.stopLoading();
            Linking.openURL(event.url);
          }
        }}
        style = {{marginTop: StatusBar.currentHeight}}
      />
     
    );
  }
  