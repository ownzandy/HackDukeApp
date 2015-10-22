/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var ScrollableTabView = require('react-native-scrollable-tab-view');
var Hacker = require('./hacker.js');
var Educator = require('./educator.js');
var Stream = require('./stream.js');

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

var schedule = React.createClass({
  render() {
    return (
      <ScrollableTabView>
        <Hacker tabLabel="Hacker" />
        <Educator tabLabel="Educator" />
        <Stream tabLabel="Stream" />
      </ScrollableTabView>
    );
  }
});

var styles = StyleSheet.create({
});

module.exports = schedule;