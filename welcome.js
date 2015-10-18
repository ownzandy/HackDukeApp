'use strict';
 
var React = require('react-native');
var Screen = require('Dimensions').get('window');
var ProgressBar = require('./ProgressBar.js');

var startTime = 1445154740000;
var endTime =  1445154860000;
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
  ScrollView
} = React;
 
var more2 = React.createClass({

     getInitialState() {
       return {
        progress: 0
      };
     },

     render() {
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
        <View> 
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
        <View style={styles.chevron}>
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
  chevronImage: {
      width: 40,
      height: 40,
  },
  chevron: {
      alignItems: 'center',
      padding: 5
  },
  labelText: {
      fontFamily: 'optima',
      color: '#FFFFFF',
      fontSize: 20
  },
  timeText: {
      fontFamily: 'optima',
      color: '#FFFFFF',
      fontSize: 20,
      padding: 10
  },
  progress: {
    alignItems: 'center',
    height: 80
  },
  scrollView: {
    width: Screen.width,
    backgroundColor: '#2a3139',
  },
  image: {
    backgroundColor: '#FFFFFF'
  },
  logo: {
      height: Screen.height-200,
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
  resizeMode: {
    height: 200
  }
});
 
module.exports = more2;