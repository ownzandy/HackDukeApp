'use strict';

var React = require('react-native');
var Collapsible = require('react-native-collapsible');
var Accordion = require('react-native-collapsible/Accordion');

var {
  StyleSheet,
  View,
  Text,
  Component,
  TouchableHighlight,
} = React;

var CONTENT = [
  {
    title: 'Where will HackDuke take place?',
    content: 'The Fitzpatrick Center for Interdisciplinary Engineering, Medicine and Applied Sciences:                                                                              101 Science Drive Durham, NC 27708',
  },
  {
    title: 'Where will parking be available?',
    content: 'Participants, mentors, and sponsors can park in the PG4/Bryan Center lot ($5 fee, cash only).',
  },
  {
    title: 'What should I do when I arrive?',
    content: 'IPSUM LOREM',
  },
  {
    title: 'How can I get help?',
    content: 'IPSUM LOREM',
  },
];
 
class more extends Component {

  getInitialState() {
    return {
      collapsed: true
    };
  }

  toggleExpanded() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  renderHeader(section) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }

   renderContent(section) {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Frequently Asked Questions</Text>
        <Accordion
          sections={CONTENT}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
          duration={600}/>
      </View>
    );
  }

}

var styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2a3139',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '300',
    marginBottom: 20,
    fontFamily: "Optima",
    alignItems: 'center',
    color: '#FFFFFF'
  },
  header: {
    backgroundColor: '#54728C',
    padding: 10,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 2,
    borderColor: '#2a3139'
  },
  headerText: {
    fontFamily: "Optima",
    textAlign: 'center',
    fontSize: 18,
    color: '#FFFFFF',
  },
  content: {
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderColor: '#2a3139',
    fontFamily: "Optima",
    flex: 1,
    padding: 20,
    backgroundColor: '#8DA7BE',
  },
});
 
module.exports = more;