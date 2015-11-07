 'use strict';
 
var React = require('react-native');
var Screen = require('Dimensions').get('window');
var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var WebIntent = require('react-native-webintent');
Parse.initialize(
  'gApTA0nc0OCYp0Bn23tgvTCo6Bdk84vPBpKm9CDu',
  'x6rYbWbGVCTmL3rQZ2nvZNcfHhIc09xKNgUnL8Nm'
);

var {
  StyleSheet,
  View,
  Text,
  Component,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} = React;
 
var submitText;

var more2 = React.createClass({

    openBubble: function() {
      WebIntent.open('http://andy-wang.com')
  },

    updateSubmitText: function(text) {
      submitText = text;
    },

    clearText: function() {
      if (submitText != '') {
        ParseReact.Mutation.Create('bubble', {email : submitText}).dispatch();
     }
      submitText = '';
    },

  render: function() {
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
          source={require('image!TransMap')} 
          resizeMode={Image.resizeMode.stretch}
          style={styles.resizeTransMap}/>
        <Text style={styles.belowMapText}>
          bubbles
        </Text>
        <Text style={styles.bigUnderText}>
          Run into a bubble to get its message!
        </Text>
        <View style={styles.startContainer}>
        <Text
          onPress={() => this.openBubble()}
          style={styles.description}>
          {'Start'}
        </Text>
        </View>
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
              <View style={styles.bubble}>
                    <TextInput style={{height: Screen.height/667*50, fontSize: Screen.height/667*20, color: '#FFFFFF', width: Screen.width/350*200}} 
                onChangeText={(text) => this.updateSubmitText(text)} underlineColorAndroid={'#FFFFFF'} textAlign={'center'} textAlignVertical={'bottom'}/>
                <TouchableOpacity onPress={this.clearText}>
                        <Text style={styles.clearText}> Click to submit your email </Text>
                </TouchableOpacity>
            </View>
            <Image 
              source={require('image!map')}
              style={styles.resizeMap}
              resizeMode={Image.resizeMode.stretch}/>
              <View style={styles.textUnderMapContainer}>
                <Text style={styles.textBelow}>
                  {'We\'re launching soon!'}
                </Text>   
                <Text style={styles.textBelowMap}>
                  get notified when it goes down
                </Text>    
              </View>
            <View style={styles.mapContainer}>
              <View style={styles.textMapContainer}>
                <Text style={styles.textBelowMap}>
                  take a picture and write a message
                </Text>
                <Text style={styles.textBelowMap}>
                  send it floating off for anyone to pick up
                </Text> 
                <Text style={styles.textBelowMap}>
                  discover bubbles by running into them 
                </Text>   
              </View>
            </View> 
        </View>                                                             
      </ScrollView>
    );
  }
});


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
    paddingBottom: 10*Screen.height/667,
    backgroundColor: '#03a9f4',
    alignItems: 'center'
  },
  header: {
    height: Screen.height-49,
    alignItems: 'center',
    backgroundColor: '#03a9f4',
    padding: 10,
    borderColor: '#2a3139'
  },
  headerText: {
    fontFamily: "avenir",
    textAlign: 'center',
    fontSize: 25,
    color: '#FFFFFF',
  },
  description: {
    fontSize: Screen.height*1/25,
    textAlign: 'center',
    fontFamily: 'futura',
    color: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 2,
    paddingLeft: Screen.height/667*50,
    paddingRight: Screen.height/667*50,
    paddingTop: Screen.height/667*1,
    paddingBottom: Screen.height/667*1,
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
    fontFamily: 'avenir',
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
    paddingTop: 10*Screen.height/667,
    paddingBottom: 10*Screen.height/667,
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03a9f4',
  },
  textContainer: {
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
    paddingTop: 10*Screen.height/667,
    fontSize: 30*Screen.height/667,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'avenir',
  },
  textBelow: {
    fontSize: 25*Screen.height/667,
    marginTop: 10*Screen.height/667,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'avenir',
  },
  textBelowMap: {
    flex: 1,
    fontSize: 15*Screen.height/667,
    textAlign: 'left',
    color: '#FFFFFF',
    fontFamily: 'avenir',
  },
  resizeMap: {
    width: 225*Screen.height/667,
    height: 150*Screen.height/667,
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
  },
   textInput: {
      height: Screen.height/667*25, 
      width: Screen.width/350*200, 
      color: '#FFFFFF',
      fontFamily: 'avenir',
   },
   textInputLine: {
    height: 1,
    width: Screen.width*2/3,
    backgroundColor: '#FFFFFF',
  },
  clearText: {
     color: '#FFFFFF',
     fontFamily: 'avenir'
  },
  textUnderMapContainer: {
    alignItems: 'center',
    paddingBottom: Screen.height/667*30
  },
  startContainer: {
    borderColor: '#FFFFFF',
    borderWidth: 2,
  }
});
 
module.exports = more2;