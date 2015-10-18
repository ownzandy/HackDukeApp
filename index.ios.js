/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var Schedule = require('./schedule.js');
var FAQ = require('./faq.js');
var Welcome = require('./welcome.js');
var Bubble = require('./bubble.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  Component
} = React;

var HackDukeApp = React.createClass({

  getInitialState: function() {
    return {
      selectedTab: 'welcome',
    };
  },

  render: function() {
     return (
      <TabBarIOS 
        tintColor="#54728C"
        barTintColor="white">
        <TabBarIOS.Item
          title={'Home'}
          style={styles.tab}
          selected={this.state.selectedTab === 'welcome'}
          icon = {require('image!home')}
          onPress={() => {
              this.setState({
                  selectedTab: 'welcome',
              });
          }}>
            <Welcome/>
        </TabBarIOS.Item>
        <TabBarIOS.Item 
          title={'Schedule'}
          selected={this.state.selectedTab === 'schedule'}
          icon = {require('image!calendar')}
          onPress={() => {
                this.setState({
                    selectedTab: 'schedule',
                });
          }}>
          <Schedule/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title={'FAQ'}
          selected={this.state.selectedTab === 'faq'}
          icon = {require('image!info-with-circle')}
          onPress={() => {
                this.setState({
                    selectedTab: 'faq',
                });
          }}>
          <FAQ/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title={'Location'}
          selected={this.state.selectedTab === 'bubble'}
          icon = {require('image!location')}
          onPress={() => {
                this.setState({
                    selectedTab: 'bubble',
                });
          }}>
          <Bubble/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );   
  }

});

var styles = StyleSheet.create({
  listcontainer: {
  backgroundColor: '#2a3139',
  paddingBottom: 700,
},
container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2a3139',
    paddingTop: 20,
    alignItems: 'flex-start',
    flexDirection: 'row'
},
});

AppRegistry.registerComponent('HackDukeApp', () => HackDukeApp);
