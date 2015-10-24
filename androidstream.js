'use strict';
 
var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var Screen = require('Dimensions').get('window');
Parse.initialize(
  'gApTA0nc0OCYp0Bn23tgvTCo6Bdk84vPBpKm9CDu',
  'x6rYbWbGVCTmL3rQZ2nvZNcfHhIc09xKNgUnL8Nm'
);

var beginningUpdates = 0;

var {
  StyleSheet,
  View,
  Text,
  Component,
  ListView,
  ScrollView,
  ProgressBar
} = React;

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

var more4 = React.createClass({

  mixins: [ParseReact.Mixin],

  observe: function(props, state) {
    var eventsQuery = (new Parse.Query('eventstream')).descending('createdAt');
        return {
          events: eventsQuery
        }
  },

getInitialState: function () {
  return {
    dataSource: ds,
  };
},


componentDidUpdate: function(prevProps, prevState) {
  beginningUpdates++
  console.log(beginningUpdates);
    if (this.pendingQueries().length == 0) {
      setTimeout((function() {
        this.refreshQueries()
      }).bind(this), 30000);
    }
},

getDataSource: function() {
  return this.state.dataSource.cloneWithRows(this.data.events)
},

  render: function() {

    if(!this.state.isLoading) {
      return (
       <ScrollView automaticallyAdjustContentInsets={false}
        contentInset={{bottom: 50}}
        style={{color: '#FFFFFF'}}>
       <View style={styles.section}>
          <Text style={styles.dateText}> 
                Announcements </Text>
          </View>
         <ListView
          dataSource={this.getDataSource()}
          renderRow={this.renderPostCell}
          automaticallyAdjustContentInsets={false}
          renderSeparator={this.renderSeparator}
          style={styles.postsListView} />
        </ScrollView>
      )
    }
    else {
      return (
      <ScrollView automaticallyAdjustContentInsets={false}
        contentInset={{bottom: 50}}
        style={{color: '#FFFFFF'}}>
       <View style={styles.section}>
          <Text style={styles.dateText}
                onPress={this._executeQuery}> 
                Double Tap to Refresh </Text>
          </View>
         <ListView
          dataSource={this.getDataSource()}
          renderRow={this.renderPostCell}
          automaticallyAdjustContentInsets={false}
          renderSeparator={this.renderSeparator}
          style={styles.postsListView} />
        </ScrollView>
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
    backgroundColor: '#F0F0F0'
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
    margin: 18,
    fontWeight: 'bold'
  },
  refreshText: {
    fontSize: 20,
    color: '#54728C',
    paddingBottom: 10,
    fontWeight: 'bold'
  },
  dateSectionText: {
    fontSize: 20,
    color: '#8DA7BE',
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  centering: {
    paddingTop: 20,
    height: 50,
    borderLeftWidth: Screen.width*1/2,
    borderRightWidth: Screen.width*1/2,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF' 
  },
});

 
module.exports = more4;