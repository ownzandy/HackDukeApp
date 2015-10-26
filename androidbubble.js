'use strict';
 
var React = require('react-native');
var Screen = require('Dimensions').get('window');
var Browser = require('react-native-browser');
var WebIntent = require('react-native-webintent');

var openBubble = function() {
  WebIntent.open('https://bubble12.herokuapp.com')
}

var {
  StyleSheet,
  View,
  Text,
  Component,
  Image,
  ScrollView,
  TextInput
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
        <View style={styles.container1}>
        <Text style={styles.topText}>
          Want free stuff?
        </Text>
        <View style={styles.pushLeft}>
          <Text style={styles.smallText}>
            your location
          </Text>
        </View>
        <Image 
          source={require('image!transmap')} 
          resizeMode={Image.resizeMode.stretch}
          style={styles.resizeTransMap}/>
        <Text style={styles.belowMapText}>
          bubbles
        </Text>
        <Text style={styles.bigUnderText}>
          Run into a bubble to get its message!
        </Text>
        <Text
          onPress={() => openBubble()}
          style={styles.description}>
          {'Start'}
        </Text>
      </View>
      <View style={styles.downIcon}>
          <Image source={require('image!chevron')}
          style={styles.chevronImage}/>
      </View>
        <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image 
                source={require('image!bubbl')}
                style={styles.resizeLogo}
                resizeMode={Image.resizeMode.stretch}/>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textBelowLogo}>
                a new way to message.
              </Text>
            </View>
            <Image 
              source={require('image!map')}
              style={styles.resizeMap}
              resizeMode={Image.resizeMode.stretch}/>
            <View style={styles.mapContainer}>
              <View style={styles.textMapContainer}>
                <Text style={styles.textBelowMap}>
                  take a picture and write a message
                </Text>
                <Text style={styles.textBelowMap}>
                  send it floating off for anyone to pick up
                </Text> 
                <Text style={styles.textBelowMap}>
                  (aka sending a bubble)
                </Text>
                <Text style={styles.textBelowMap}>
                  discover bubbles by running into them 
                </Text>   
                <Text style={styles.textBelow}>
                  We're launching soon!
                </Text>   
                <Text style={styles.textBelowMap}>
                  get notified when it goes down
                </Text> 
              </View>
            </View> 
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
    height: Screen.height/667*30
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#03a9f4',
    padding: 10,
    borderColor: '#2a3139'
  },
  headerText: {
    fontFamily: "futura",
    textAlign: 'center',
    fontSize: 25,
    color: '#FFFFFF',
  },
  description: {
    fontSize: Screen.height*1/25,
    marginTop: Screen.height*1/90,
    textAlign: 'center',
    fontFamily: 'futura',
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 2.5,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: Screen.height/667*5,
    paddingBottom: Screen.height/667*5,
  },
  container: {
    flex: 1,
    height: Screen.height-70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a3139',
  },
  container1: {
    flex: 1,
    height: Screen.height-109,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a3139',
  },
  pushLeft: {
    paddingTop: 5*Screen.height/667,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a3139',
  },
  topText: {
    fontSize: 30*Screen.height*1/667,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'futura',
  },
  smallText: {
    fontSize: Screen.height*1/35,
    textAlign: 'center',
    color: '#FFFFFF',
    marginLeft: 50*Screen.width/375,
    fontFamily: 'futura',
  },
  smallCenterText: {
    fontSize: Screen.height*1/35,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'futura',
  },
  belowMapText: {
    fontSize: Screen.height*1/35,
    textAlign: 'center',
    color: '#FFFFFF',
    marginLeft: Screen.width*100/375,
    fontFamily: 'futura',
  },
  bigUnderText: {
    fontSize: Screen.height*1/35,
    paddingTop: 20*Screen.height/667,
    paddingBottom: 5*Screen.height/667,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'futura',
  },
  resizeMode: {
    width: Screen.height*275/667,
    height: Screen.width*300/375,
  },
  logoContainer: {
    paddingTop: 50*Screen.height/667,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03a9f4',
  },
  mapContainer: {
    paddingTop: 30*Screen.height/667,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03a9f4',
  },
  textContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03a9f4',
  },
  textMapContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#03a9f4',
  },
  textBelowLogo: {
    fontSize: 30*Screen.height/667,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'futura',
  },
  textBelow: {
    fontSize: 28*Screen.height/667,
    marginTop: 30*Screen.height/667,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'futura',
  },
  textBelowMap: {
    flex: 1,
    fontSize: 18*Screen.height/667,
    textAlign: 'left',
    color: '#FFFFFF',
    fontFamily: 'futura',
  },
  resizeMap: {
    width: 310*Screen.height/667,
    height: 200*Screen.height/667,
  },
  resizeLogo: {
    width: 145*Screen.height/667,
    height: 60*Screen.height/667,
  },
  downIcon: {
    alignItems: 'center'
  },
  resizeTransMap: {
    height: 323*Screen.height/667,
    width: 200*Screen.height/667
  }
});
 
module.exports = more2;