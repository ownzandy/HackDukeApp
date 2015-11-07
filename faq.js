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
    title: 'Where\'s HackDuke?',
    content:'We\'re located in the Duke University Engineering Quad, including the Teer, Hudson, and FCIEMAS buildings. Check out the location tab once you\'ve arrived!',
  },
  {
    title: 'What should I do when I arrive?',
    content: 'You can park in the Bryan Center parking garage and head over to the first floor entrance of FCIEMAS to check-in! You can find directions on our website if you\'re lost.',
  },
  {
    title: 'How can I get help?',
    content: 'If you\'re new, come to Schiciano behind the check-in/food area. Other technical mentors will be located at the bottom of the master staircase. Volunteers will also be running around in HackDuke sweaters.',
  },
  {
    title: 'Where can I check out hardware?',
    content: 'Hardware will be located at Twinnie\'s, across from the check-in/food area.',
  },
   {
    title: 'Where can I sleep?',
    content: 'Nap rooms will be available in the Hudson building.',
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
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
    fontFamily: "futura",
    alignItems: 'center',
    color: '#FFFFFF'
  },
  header: {
    backgroundColor: '#54728C',
    padding: 10,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    shadowOpacity: 1,
    borderColor: '#2a3139'
  },
  headerText: {
    fontFamily: "futura",
    textAlign: 'center',
    fontSize: 18,
    color: '#FFFFFF',
  },
  content: {
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderColor: '#2a3139',
    fontFamily: "futura",
    flex: 1,
    padding: 20,
    backgroundColor: '#8DA7BE',
  },
});
 
module.exports = more;