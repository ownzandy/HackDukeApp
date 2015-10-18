'use strict';
 
var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');

var {
  StyleSheet,
  View,
  Text,
  Component,
  ListView,
  ScrollView
} = React;
 
var headerSeparate = function(s) {
    return s.split('*');
}

var more4 = React.createClass({
  getInitialState: function() {

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    }),
    dataBlob = {
      '':[{'time':'12:45','name':'Start Hacking!'}, 
          {'time':'1:00','name':'Esri Workshop now in Hudson 212!'},
          {'time':'1:30','name':'A wave of bubbles will be sent in 10 minutes!'},
          {'time':'2:15','name':'Come get your free t-shirts from Google!'},
          {'time':'3:00','name':'Google workshop in Teer 34'},
          {'time':'3:45','name':'A wave of bubbles will be sent in 15 minutes!'},
          {'time':'4:00','name':'Silent Dance Party in Twinnies!'},
          {'time':'5:00','name':'Dinner in first floor CIEMAS'},
          {'time':'11:00','name':'Start submitting your projects to DevPost!'},
          {'time':'1:00','name':'Esri Workshop now in Hudson 212!'},
          {'time':'1:30','name':'A wave of bubbles will be sent in 10 minutes!'},
          {'time':'2:15','name':'Come get your free t-shirts from Google!'},
          {'time':'3:00','name':'Google workshop in Teer 34'},
          {'time':'3:45','name':'A wave of bubbles will be sent in 15 minutes!'},
          {'time':'4:00','name':'Silent Dance Party in Twinnies!'},
          {'time':'5:00','name':'Dinner in first floor CIEMAS'},
          {'time':'11:00','name':'Start submitting your projects to DevPost!'},
          {'time':'5:00','name':'Dinner in first floor CIEMAS'},
          {'time':'11:00','name':'Start submitting your projects to DevPost!'},
          {'time':'1:00','name':'Esri Workshop now in Hudson 212!'},
          {'time':'1:30','name':'A wave of bubbles will be sent in 10 minutes!'},
          {'time':'2:15','name':'Come get your free t-shirts from Google!'},
          {'time':'3:00','name':'Google workshop in Teer 34'},
          {'time':'3:45','name':'A wave of bubbles will be sent in 15 minutes!'},
          {'time':'4:00','name':'Silent Dance Party in Twinnies!'},
          {'time':'5:00','name':'Dinner in first floor CIEMAS'},
          {'time':'11:00','name':'Start submitting your projects to DevPost!'}]
    };

    return {
      dataSource: ds.cloneWithRowsAndSections(
        dataBlob)
    };
  },
  render: function() {
    return (
      <ScrollView>
        <View style={styles.section}>
            <Text style={styles.dateText}> Announcements Stream </Text>
        </View>
         <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderPostCell}
          automaticallyAdjustContentInsets={false}
          renderSeparator={this.renderSeparator}
          style={styles.postsListView} />
      </ScrollView>
      )
  },
  
    renderPostCell: function(rowData) {
    return (
      <View style={styles.horizontalContainer}>
        <View style={styles.container}>
          <Text style={styles.postTitle}>
            {rowData.name}
          </Text>          
        </View>
        <Text style={styles.timeFormat}>
            {rowData.time}
        </Text>
      </View>
    )
  },
  renderSeparator: function(sectionID: number, rowID: number){
    return(
      <View style={styles.separator}>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  horizontalContainer:{
    backgroundColor: '#FFFFFD',
    flexDirection: 'row',
    padding: 2,
    alignItems: 'center'
  },
  container: {
    marginLeft: 7,
    backgroundColor: '#FFFFFD',
    flex: 1
  },
  postsListView:{
    flex: 1,
    backgroundColor: '#FFFFFD'
  },
  section: {
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  sectionText: {
    fontSize: 20,
    color: '#DA552F',
    fontWeight: 'bold'
  },
  votesContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFD',
    marginRight: 15
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 25,
    marginTop: 10,
    alignSelf: 'center',
    marginRight: 15,
    marginLeft: 15
  },
  icon: {
    alignSelf: 'center'
  },
  votes: {
    textAlign: 'center',
    fontSize: 15
  },
  postCount: {
    fontSize: 20,
    textAlign: 'right',
    margin: 10,
    color: 'gray',
    marginLeft: 15,
  },
  postDetailsContainer:{
    marginLeft: 20,
    flex: 1,
  },
  postTitle: {
    fontSize: 15,
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    color: '#54728C'
  },
  postDetailsLine: {
    fontSize: 12,
    marginBottom: 4,
    color: 'gray',
  },
  timeFormat:{
    fontSize:12,
    marginRight: 15,
    color: 'gray',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#CCCCCC',
  },
  dateText: {
    fontSize: 20,
    color: '#54728C',
    padding: 10,
    fontWeight: 'bold'
  },
  dateSectionText: {
    fontSize: 20,
    color: '#8DA7BE',
    fontWeight: 'bold',
    paddingBottom: 5,
  }
});

 
module.exports = more4;