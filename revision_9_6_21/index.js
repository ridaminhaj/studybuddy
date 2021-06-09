/*import {AppRegistry, Text} from 'react-native';
import {name as appName} from './app.json';*/
import App from './App';

import React from  'react';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';

const ReduxApp =() => (
    <Provider store={store}>
        <App/>
    </Provider>
)