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
      'Saturday, November 7*12:00-2:00':[{'time':'12:45','name':'Example Name', 'place':'Teer Building'}, {'time':'1:00','name':'Party', 'place':'Hudson Building'}],
      '2:00-4:00':[{'time':'12:45','name':'Example Name', 'place':'Teer Building'}, {'time':'1:00','name':'Party', 'place':'Hudson Building'}],
      '4:00-6:00':[{'time':'12:45','name':'Example Name', 'place':'Teer Building'}, {'time':'1:00','name':'Party', 'place':'Hudson Building'}],
      '6:00-8:00':[{'time':'12:45','name':'Example Name', 'place':'Teer Building'}, {'time':'1:00','name':'Party', 'place':'Hudson Building'}],
      '8:00-10:00':[{'time':'12:45','name':'Example Name', 'place':'Teer Building'}, {'time':'1:00','name':'Party', 'place':'Hudson Building'}],
      '10:00-12:00':[{'time':'12:45','name':'Example Name', 'place':'Teer Building'}, {'time':'1:00','name':'Party', 'place':'Hudson Building'}],
      '1:00-3:00':[{'time':'12:45','name':'Example Name', 'place':'Teer Building'}, {'time':'1:00','name':'Party', 'place':'Hudson Building'}],
      '5:00-4:00':[{'time':'12:45','name':'Example Name', 'place':'Teer Building'}, {'time':'1:00','name':'Party', 'place':'Hudson Building'}],
      '2:00-1:00':[{'time':'12:45','name':'Example Name', 'place':'Teer Building'}, {'time':'1:00','name':'Party', 'place':'Hudson Building'}]
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
    marginTop: 5,
    fontWeight: 'bold',
  },
  dateSectionText: {
    fontSize: 20,
    color: '#54728C',
    fontWeight: 'bold',
    paddingBottom: 5,
  }
});

 
module.exports = more4;