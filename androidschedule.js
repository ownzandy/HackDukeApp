/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var ScrollableTabView = require('react-native-scrollable-tab-view');
var Hacker = require('./androidhacker.js');
var Stream = require('./androidstream.js');

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
      <ScrollableTabView edgeHitWidth={0}>
        <Hacker tabLabel="Schedule" />
        <Stream tabLabel="Stream" />
      </ScrollableTabView>
    );
  }
});

var styles = StyleSheet.create({
});

module.exports = schedule;