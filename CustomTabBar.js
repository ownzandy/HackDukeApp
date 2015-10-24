'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image
} = React;

var deviceWidth = Dimensions.get('window').width;

var styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },

  tabs: {
    height: 45,
    flexDirection: 'row',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
});

var findIcon = function(name) {
  if (name.name == 'home') {
    var source = require('image!home');
  }
  if (name.name == 'infowithcircle') {
    var source = require('image!infowithcircle');
  }
  if (name.name == 'location') {
    var source = require('image!location');
  }
  if (name.name == 'calendar') {
    var source = require('image!calendar');
  }
  return source;
}

var CustomTabBar = React.createClass({
  selectedTabIcons: [],
  unselectedTabIcons: [],

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  },

  renderTabOption(name, page) {
    var isTabActive = this.props.activeTab === page;
    var source;
    return (
      <TouchableOpacity key={name} onPress={() => this.props.goToPage(page)} style={[styles.tab]}>
        <Image source={findIcon({name})} size={30} style={{width: 30, height: 30, position: 'absolute', top: 0, left: deviceWidth/13}}
              ref={(icon) => { this.selectedTabIcons[page] = icon }}/>
        <Image source={findIcon({name})} size={30} style={{width: 30, height: 30, position: 'absolute', top: 0, left: deviceWidth/13}}
              ref={(icon) => { this.unselectedTabIcons[page] = icon }}/>
      </TouchableOpacity>
    );
  },

  setAnimationValue(value) {
    var currentPage = this.props.activeTab;

    this.unselectedTabIcons.forEach((icon, i) => {
      var iconRef = icon;

      if(!icon.setNativeProps && icon !== null) {
        iconRef = icon.refs.icon_image
      }
      if (value - i >= 0 && value - i <= 1) {
        iconRef.setNativeProps({opacity: value - i});
      }
      if (i - value >= 0 &&  i - value <= 1) {
        iconRef.setNativeProps({opacity: i - value});
      }
    });
  },

  render() {
    return (
      <View style={styles.tabs}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
      </View>
    );
  },
});

module.exports = CustomTabBar;