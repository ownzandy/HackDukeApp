/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var SegmentedView = require('./SegmentedView.js')

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

  getInitialState() {
    return {index: 0}
  },
  

  render() {
    return (
      <View style={styles.container}>
         <SegmentedView
          titles={["Stream", "Hacker", "Educator"]}
          index={this.state.index}
          stretch
          onPress={index => this.setState({ index })} />
        </View>
      ) 
  }
});

var styles = StyleSheet.create({
container: {
    borderWidthTop: 10,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2a3139',
    paddingTop: 20,
},
});

module.exports = schedule;