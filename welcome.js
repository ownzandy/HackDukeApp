'use strict';
 
var React = require('react-native');
var Screen = require('Dimensions').get('window');
var ProgressBar = require('./ProgressBar.js');

var startTime =  1446912000000;
var endTime =  1447012800000;
var totalTime = endTime - startTime;

var eventProgress = function() {
  var currTime = Date.now();
  if (currTime < startTime) {
    return 0;
  }
  else if (currTime > startTime && currTime < endTime) {
      return (currTime-startTime)/totalTime;
  }
  else {
    return 1;
  }
}

var getTime = function(ms) {
    var wholeSeconds = Math.floor(ms/1000);
    var hours = Math.floor(wholeSeconds / 3600);
    var minutes = Math.floor((wholeSeconds - hours * 3600) / 60);
    var seconds =  Math.floor((wholeSeconds - hours * 3600 - minutes * 60));
    var stringHours = hours.toString();
    var stringMinutes = minutes.toString();
    var stringSeconds = seconds.toString();
    if (stringHours.length == 1) {
      stringHours = '0' + stringHours;
    }
    if (stringMinutes.length == 1) {
      stringMinutes = '0' + stringMinutes;
    }
    if (stringSeconds.length == 1) {
      stringSeconds = '0' + stringSeconds;
    }
    var timeRem = stringHours + ':' + stringMinutes + ':' + stringSeconds;
    return timeRem;
}

var calculateTime = function(s) {
        var currTime = Date.now();
        if (currTime < startTime) {
              if (s == 0) {
                return 'HackDuke Countdown'
              }
              else {
                return getTime(startTime-currTime);
              }
        }
        else if (currTime > startTime && currTime < endTime) {
              if (s == 0) {
                if (endTime - currTime < 3600*1000) {
                    return 'Start submitting your projects!'
                }
                return 'Time Remaining'
              }
              else {
                return getTime(endTime-currTime);
              }
        }
        else {
              if (s == 0) {
                  return 'Time\'s Up!'
              }
              else {
                return '00:00:00';
              }
        }
};

var {
  StyleSheet,
  View,
  Text,
  Component,
  Image,
  ScrollView,
  PushNotificationIOS
} = React;
 
var more2 = React.createClass({

     getInitialState() {
       return {
        progress: 0
      };
     },

     findChevronStyle: function() {
        if (Screen.height == 736) {
            return styles.chevron6Plus;
        }
        if (Screen.height == 667) {
            return styles.chevron6;
        }
        if (Screen.height == 568) {
            return styles.chevron5;
        }
        if (Screen.height == 480) {
            return styles.chevron4;
        }
     },

     findLogoContainerStyle: function() {
            if (Screen.height == 736) {
            return styles.logoContainer6Plus;
        }
        if (Screen.height == 667) {
            return styles.logoContainer6;
        }
        if (Screen.height == 568) {
            return styles.logoContainer5;
        }
        if (Screen.height == 480) {
            return styles.logoContainer4;
        }
     },

     render: function() {

      setTimeout((function() {
        this.setState({});
      }).bind(this), 1000);

    return (
      <ScrollView
        automaticallyAdjustContentInsets={true}
        scrollEventThrottle={200}
        alignItems={'stretch'}
        justifyContent={'flex-start'}
        style={styles.scrollView}>
        <View style={this.findLogoContainerStyle()}> 
            <Image source={require('image!logo')} 
               style={styles.logo}
               resizeMode={Image.resizeMode.contain} /> 
        </View>
        <View style={styles.progress}>
            <Text style={styles.labelText}> {calculateTime(0)} </Text>
            <ProgressBar
                  fillStyle={{color: '#FFFFFF', height: 10}}
                  style={{marginTop: 10, width: 200}}
            progress={eventProgress()}/>
            <Text style={styles.timeText}> {calculateTime(1)} </Text>
        </View>
        <View style={this.findChevronStyle()}>
            <Image source={require('image!chevron')}
                    style={styles.chevronImage}/>
        </View>
        <View style={styles.header}>
            <Text style={styles.headerText}> Sponsors </Text>  
        </View> 
        <View style={styles.image}>
               <Image source={require('image!sponsors')} 
               style={styles.sponsors}
               resizeMode={Image.resizeMode.contain} />   
         </View>     

      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  logoContainer6Plus: {
      height: Screen.height-200-5*Screen.height/100,
  },
  chevron6Plus: {
      alignItems: 'center',
      paddingTop: 1/11*(Screen.height-200),
      paddingBottom: 10,
  },
  logoContainer6: {
      height: Screen.height-190-5*Screen.height/100,
  },
  chevron6: {
      alignItems: 'center',
      paddingTop: 1/13*(Screen.height-200),
      paddingBottom: 10,
  },
  logoContainer5: {
      height: Screen.height-185-5*Screen.height/100,
  },
  chevron5: {
      alignItems: 'center',
      paddingTop: 1/15*(Screen.height-200),
      paddingBottom: 10,
  },
  logoContainer4: {
      height: Screen.height-177-5*Screen.height/100,
  },
  chevron4: {
      alignItems: 'center',
      paddingTop: 1/20*(Screen.height-200),
      paddingBottom: 10,
  },

  chevronImage: {
      width: 40,
      height: 40,
  },
  labelText: {
      fontFamily: 'optima',
      color: '#FFFFFF',
      fontSize: 20
  },
  timeText: {
      paddingTop: 10,
      fontFamily: 'optima',
      color: '#FFFFFF',
      fontSize: 20,
  },
  progress: {
    alignItems: 'center',
  },
  scrollView: {
    width: Screen.width,
    backgroundColor: '#2a3139',
  },
  image: {
    backgroundColor: '#FFFFFF'
  },
  logo: {
      height: Screen.height-150,
      width: Screen.width,
  },
  sponsors: {
    width: Screen.width,
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
});
 
module.exports = more2;