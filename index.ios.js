/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var Schedule = require('./schedule2.js');
var FAQ = require('./faq.js');
var Welcome = require('./welcome.js');
var Bubble = require('./bubble.js');
var Stream = require('./stream.js');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  AlertIOS,
  Component,
  PushNotificationIOS,
  StatusBarIOS
} = React;

var registerInstallation = function(data) {
    var url = "https://api.parse.com";
    url += "/1/installations";
    fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'X-Parse-Application-Id': 'gApTA0nc0OCYp0Bn23tgvTCo6Bdk84vPBpKm9CDu',
            'X-Parse-REST-API-Key': 'Mryxq1sCUalshlJWryOHPb8p9IYiFg2QecoxUZBP',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
};

var HackDukeApp = React.createClass({


  getInitialState: function() {
    return {
      selectedTab: 'welcome',
    };
  },

  componentWillMount: function() {
    PushNotificationIOS.addEventListener('register', function(token){
        registerInstallation({
        "deviceType": "ios",
         "deviceToken": token,
        "channels": ["global"]
        })
    });
    StatusBarIOS.setStyle(1);
  },

  render: function() {

    PushNotificationIOS.requestPermissions();

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
          title={'Events'}
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
