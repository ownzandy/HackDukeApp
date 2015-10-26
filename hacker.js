'use strict';
 
var React = require('react-native');
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
      'Saturday, November 7*9:00-12:00 AM':[{'time':'10:00','name':'Check-In Begins', 'place':'FCIEMAS Floor 1 Schiciano Entrance'}, {'time':'11:00-12:00','name':'Lunch and Mingle', 'place':'FCIEMAS Floor 1 Schiciano Entrance'}],
      '12:00-3:00 PM':[ {'time':'12:30-1:30','name':'Opening Ceremony', 'place':'Bryan Center, Reynolds Auditorium'},
                        {'time':'1:30','name':'Hacking Begins!', 'place':'FCIEMAS'},
                       {'time':'1:30-2:30','name':'Education Talks', 'place':'Floor 1 Schiciano Auditorium A'},
                       {'time':'1:30-2:30','name':'Inequality Talks', 'place':'Floor 1 Schiciano Auditorium B'},
                       {'time':'1:30-2:30','name':'Energy and Environment Talks', 'place':'Hudson Building 125'},
                       {'time':'1:30-2:30','name':'Health and Wellness Talks', 'place':'Teer Building 203'}],
      '3:00-6:00 PM':[{'time':'4:00','name':'DiVE Tours Begin', 'place':'FCIEMAS Floor 1'}, {'time':'5:00-6:00','name':'Rock Climbing Wall', 'place':'Engineering Quad'}],
      '6:00-9:00 PM':[{'time':'6:00-7:30','name':'Dinner and Talks', 'place':'FCIEMAS Floor 1 Schiciano Entrance'}, {'time':'6:30','name':'DiVE Tours End', 'place':'FCIEMAS Floor 1'}, {'time':'8:00-9:00','name':'Ladies Dessert Meetup', 'place':'FCIEMAS Floor 1 Schiciano Entrance'}],
      '9:00-12:00 PM':[{'time':'10:00-11:00','name':'Cat Cookie Decoration', 'place':'Engineering Quad'}, {'time':'11:00-12:00','name':'Nerf Gun War', 'place':'FCIEMAS Basement'}],
      'Sunday, November 8*12:00-12:00 AM':[{'time':'12:00-1:00','name':'Midnight Snack', 'place':'FCIEMAS Floor 1 Schiciano Entrance'}, {'time':'9:00-10:00','name':'Breakfast', 'place':'FCIEMAS Floor 1 Schiciano Entrance'}],
      ' 12:00-3:00 PM':[{'time':'12:00','name':'Hacking Ends!', 'place':'FCIEMAS'},{'time':'12:00-3:00','name':'Lunch', 'place':'FCIEMAS Floor 1 Schiciano Entrance'}, {'time':'12:30-1:30','name':'Hack Expo Part 1', 'place':'FCIEMAS'}, {'time':'2:00-3:00','name':'Hack Expo Part 2', 'place':'FCIEMAS'}],
      ' 3:00-6:00 PM':[{'time':'4:00-5:00','name':'Closing Ceremony', 'place':'Bryan Center, Reynolds Auditorium'}, {'time':'5:00 PM','name':'Departure', 'place':'FCIEMAS'}],
    };

    return {
      dataSource: ds.cloneWithRowsAndSections(
        dataBlob)
    };
  },
  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        contentInset={{bottom: 50}}
        automaticallyAdjustContentInsets={false}
        renderRow={this.renderPostCell}
        zoomScale={5}
        renderSectionHeader={this.renderSectionHeader}
        renderSeparator={this.renderSeparator}
        style={styles.postsListView} />
      )
  },
  
   renderSectionHeader: function(sectionData, sectionID) {
    var s = headerSeparate(sectionID);
    if (s.length == 1) {
      return (
        <View style={styles.section}>
        <Text style={styles.sectionText}>{s[0]}</Text>
        </View>
      )
    }
    else {
    return (
      <View style={styles.section}>
        <Text style={styles.dateText}>{s[0]}</Text>
        <Text style={styles.dateSectionText}>{s[1]}</Text>
      </View>
      )
    }
  },
  
    renderPostCell: function(rowData) {
    return (
      <View style={styles.horizontalContainer}>
        <View style={styles.container}>
          <Text style={styles.postTitle}>
            {rowData.name}
          </Text>
          <Text style={styles.postDetailsLine}>
            {rowData.place}
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
    flexDirection: 'row'
  },
  container: {
    marginLeft: 7,
    backgroundColor: '#FFFFFD',
    flex: 1
  },
  postsListView:{
    backgroundColor: '#FFFFFD',
  },
  section: {
    alignItems: 'center',
    backgroundColor: '#F0F0F0'
  },
  sectionText: {
    fontSize: 20,
    color: '#54728C',
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
    marginBottom: 4,
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
    marginTop: 20,
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
    paddingTop: 5,
     fontWeight: 'bold',
    paddingBottom: 3
  },
  dateSectionText: {
    fontSize: 20,
    color: '#54728C',
    fontWeight: 'bold',
    paddingBottom: 5,
  }
});

 
module.exports = more4;