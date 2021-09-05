import React, { Component } from 'react';
import { StyleSheet, View, Text, ImagePickerIOS } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Dictionary from '.databse.js'
export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <HomeScreen />
      </View>
    )
  }
}
