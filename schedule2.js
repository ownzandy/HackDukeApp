/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var ScrollableTabView = require('react-native-scrollable-tab-view');
var Hacker = require('./hacker.js');
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
      <View style={styles.container}>
      <ScrollableTabView>
        <Hacker tabLabel="Schedule" />
        <Stream tabLabel="Stream" />
      </ScrollableTabView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderTopWidth: 20,
    borderColor: '#2a3139'
},
});

module.exports = schedule;