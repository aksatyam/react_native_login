import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View} from 'react-native';

//import Login Component 
import Login from './src/components/Login/Login';

export default class App extends Component{
  render() {
    return (
      <Login />
     );
  }
}
