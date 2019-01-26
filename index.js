/** @format */

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import Redux,{createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';



import  reducer from './componens/reducers/index';
import  Router from './componens/router';
import {name as appName} from './app.json';

const myStore = createStore(reducer, {}, applyMiddleware(ReduxThunk));
 const  App = ()=><Provider store ={myStore}>
    <Router/>
</Provider>;




AppRegistry.registerComponent(appName, () => App);

