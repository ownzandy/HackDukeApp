/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var ScrollableTabView = require('./android-tab-view.js');
var Welcome = require('./androidwelcome.js');
var FAQ = require('./androidfaq.js');
var Schedule = require('./androidschedule.js')
var Bubble = require('./androidbubble.js')
var StatusBarAndroid = require('react-native-android-statusbar');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  Image,
  TouchableHighlight,
  PropTypes,
  ScrollView
} = React;

var HackDukeApp = React.createClass({
  render() {
    StatusBarAndroid.setHexColor('#2a3139'); 
    return (
      <ScrollableTabView edgeHitWidth={0}>
        <Welcome tabLabel="home" />
        <Schedule tabLabel="calendar" />
        <FAQ tabLabel="infowithcircle" />
        <Bubble tabLabel="location" />
      </ScrollableTabView>
    );
  }
});

var styles = StyleSheet.create({
});

AppRegistry.registerComponent('HackDukeApp', () => HackDukeApp);