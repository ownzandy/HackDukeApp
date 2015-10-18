'use strict';
 
var React = require('react-native');
var Screen = require('Dimensions').get('window');
var Browser = require('react-native-browser');

var {
  StyleSheet,
  View,
  Text,
  Component,
  Image,
  ScrollView
} = React;
 
class more2 extends Component {

  render() {
    return (
      <ScrollView
        automaticallyAdjustContentInsets={true}
        scrollEventThrottle={200}
        alignItems={'stretch'}
        justifyContent={'flex-start'}
        style={styles.scrollView}>
        <View style={styles.container}>
        <Text
          onPress={() => Browser.open('http://bubble12.herokuapp.com/', {
                    showUrlWhileLoading: true,
                    navigationButtonsHidden: false,
                    showActionButton: true,
                    showDoneButton: true,
                    doneButtonTitle: 'Done',
                    showPageTitles: true,
                    disableContextualPopupMenu: false,
                    hideWebViewBoundaries: false
                    })}
          style={styles.description}>
          {'Open'}
        </Text>
      </View>
        <View style={styles.chevron}>
            <Image source={require('image!chevron')}
                    style={styles.chevronImage}/>
        </View>
        <View style={styles.header}>
            <Text style={styles.headerText}> Bubble </Text>  
        </View> 
        <View style={styles.bubble}>
            <Text style={styles.bubbleText}> </Text>
         </View>                                                                    
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  chevronImage: {
      width: 40,
      height: 40,
  },
  chevron: {
      alignItems: 'center',
      padding: 5
  },
  scrollView: {
    width: Screen.width,
    backgroundColor: '#2a3139',
  },
  bubble: {
    backgroundColor: '#03a9f4',
    paddingBottom: Screen.height,
  },
  header: {
    backgroundColor: '#54728C',
    padding: 10,
    borderColor: '#2a3139'
  },
  headerText: {
    fontFamily: "Optima",
    textAlign: 'center',
    fontSize: 25,
    color: '#FFFFFF',
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'optima',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    height: Screen.height-120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a3139',
  }
});
 
module.exports = more2;