
'use strict';
var React = require('react-native');
var screen = require('Dimensions').get('window');
var Hacker = require('./hacker.js');
var Educator = require('./educator.js');
var Stream = require('./stream.js');
var currView;

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component,
  Image,
  TouchableHighlight,
  PropTypes,
  ScrollView
} = React;

var easingTypes = {
  linear: function(t, b, _c, d) {
    var c = _c - b;
    return c * t / d + b;
  },
  easeInQuad: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function(t, b, _c, d) {
    var c = _c - b;
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t + b;
    } else {
      return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
  },
  easeInCubic: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function(t, b, _c, d) {
    var c = _c - b;
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t + b;
    } else {
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
  },
  easeInQuart: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function(t, b, _c, d) {
    var c = _c - b;
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t + b;
    } else {
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }
  },
  easeInQuint: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function(t, b, _c, d) {
    var c = _c - b;
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t * t + b;
    } else {
      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }
  },
  easeInSine: function(t, b, _c, d) {
    var c = _c - b;
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function(t, b, _c, d) {
    var c = _c - b;
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function(t, b, _c, d) {
    var c = _c - b;
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: function(t, b, _c, d) {
    var c = _c - b;
    var _ref;
    return (_ref = t === 0) !== null ? _ref : {
      b: c * Math.pow(2, 10 * (t / d - 1)) + b
    };
  },
  easeOutExpo: function(t, b, _c, d) {
    var c = _c - b;
    var _ref;
    return (_ref = t === d) !== null ? _ref : b + {
      c: c * (-Math.pow(2, -10 * t / d) + 1) + b
    };
  },
  easeInOutExpo: function(t, b, _c, d) {
    var c = _c - b;
    if (t === 0) {
      b;
    }
    if (t === d) {
      b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    } else {
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  },
  easeInCirc: function(t, b, _c, d) {
    var c = _c - b;
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function(t, b, _c, d) {
    var c = _c - b;
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    } else {
      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
  },
  easeInElastic: function(t, b, _c, d) {
    var c = _c - b;
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      b;
    } else if ((t /= d) === 1) {
      b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  easeOutElastic: function(t, b, _c, d) {
    var c = _c - b;
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      b;
    } else if ((t /= d) === 1) {
      b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  easeInOutElastic: function(t, b, _c, d) {
    var c = _c - b;
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      b;
    } else if ((t /= d / 2) === 2) {
      b + c;
    }
    if (!p) {
      p = d * (0.3 * 1.5);
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    if (t < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    } else {
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    }
  },
  easeInBack: function(t, b, _c, d, s) {
    var c = _c - b;
    if (s === void 0) {
      s = 1.70158;
    }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function(t, b, _c, d, s) {
    var c = _c - b;
    if (s === void 0) {
      s = 1.70158;
    }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function(t, b, _c, d, s) {
    var c = _c - b;
    if (s === void 0) {
      s = 1.70158;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    } else {
      return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    }
  },
  easeInBounce: function(t, b, _c, d) {
    var c = _c - b;
    var v;
    v = tweenFunctions.easeOutBounce(d - t, 0, c, d);
    return c - v + b;
  },
  easeOutBounce: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
  },
  easeInOutBounce: function(t, b, _c, d) {
    var c = _c - b;
    var v;
    if (t < d / 2) {
      v = tweenFunctions.easeInBounce(t * 2, 0, c, d);
      return v * 0.5 + b;
    } else {
      v = tweenFunctions.easeOutBounce(t * 2 - d, 0, c, d);
      return v * 0.5 + c * 0.5 + b;
    }
  }
};

// additive is the new iOS 8 default. In most cases it simulates a physics-
// looking overshoot behavior (especially with easeInOut. You can test that in
// the example
var DEFAULT_STACK_BEHAVIOR = 'ADDITIVE';
var DEFAULT_EASING = easingTypes.easeInOutQuad;
var DEFAULT_DURATION = 300;
var DEFAULT_DELAY = 0;

// see usage below
function returnState(state) {
  return state;
}

var tweenState = {
  easingTypes: easingTypes,
  stackBehavior: {
    ADDITIVE: 'ADDITIVE',
    DESTRUCTIVE: 'DESTRUCTIVE',
  }
};

tweenState.Mixin = {
  getInitialState: function() {
    return {
      tweenQueue: [],
    };
  },

  tweenState: function(a, b, c) {
    // tweenState(stateNameString, config)
    // tweenState(stateRefFunc, stateNameString, config)

    // passing a state name string and retrieving it later from this.state
    // doesn't work for values in deeply nested collections (unless you design
    // the API to be able to parse 'this.state.my.nested[1]', meh). Passing a
    // direct, resolved reference wouldn't work either, since that reference
    // points to the old state rather than the subsequent new ones.
    if (typeof a === 'string') {
      c = b;
      b = a;
      a = returnState;
    }
    this._tweenState(a, b, c);
  },

  _tweenState: function(stateRefFunc, stateName, config) {
    this.setState(function(state) {
      var stateRef = stateRefFunc(state);

      // see the reasoning for these defaults at the top
      var newConfig = {
        easing: config.easing || DEFAULT_EASING,
        duration: config.duration == null ? DEFAULT_DURATION : config.duration,
        delay: config.delay == null ? DEFAULT_DELAY : config.delay,
        beginValue: config.beginValue == null ? stateRef[stateName] : config.beginValue,
        endValue: config.endValue,
        onEnd: config.onEnd,
        stackBehavior: config.stackBehavior || DEFAULT_STACK_BEHAVIOR,
      };

      var newTweenQueue = state.tweenQueue;
      if (newConfig.stackBehavior === tweenState.stackBehavior.DESTRUCTIVE) {
        newTweenQueue = state.tweenQueue.filter(function(item) {
          return item.stateName !== stateName || item.stateRefFunc(state) !== stateRef;
        });
      }

      newTweenQueue.push({
        stateRefFunc: stateRefFunc,
        stateName: stateName,
        config: newConfig,
        initTime: Date.now() + newConfig.delay,
      });

      // tweenState calls setState
      // sorry for mutating. No idea where in the state the value is
      stateRef[stateName] = newConfig.endValue;
      // this will also include the above update
      if (newTweenQueue.length === 1) {
        this.startRaf();
      }

      return {tweenQueue: newTweenQueue};
    });
  },

  getTweeningValue: function(a, b) {
    // see tweenState API
    if (typeof a === 'string') {
      b = a;
      a = returnState;
    }
    return this._getTweeningValue(a, b);
  },

  _getTweeningValue: function(stateRefFunc, stateName) {
    var state = this.state;
    var stateRef = stateRefFunc(state);
    var tweeningValue = stateRef[stateName];
    var now = Date.now();

    for (var i = 0; i < state.tweenQueue.length; i++) {
      var item = state.tweenQueue[i];
      var itemStateRef = item.stateRefFunc(state);
      if (item.stateName !== stateName || itemStateRef !== stateRef) {
        continue;
      }

      var progressTime = now - item.initTime > item.config.duration ?
        item.config.duration :
        Math.max(0, now - item.initTime);
      // `now - item.initTime` can be negative if initTime is scheduled in the
      // future by a delay. In this case we take 0

      var contrib = -item.config.endValue + item.config.easing(
        progressTime,
        item.config.beginValue,
        item.config.endValue,
        item.config.duration
        // TODO: some funcs accept a 5th param
      );
      tweeningValue += contrib;
    }

    return tweeningValue;
  },

  _rafCb: function() {
    var state = this.state;
    if (state.tweenQueue.length === 0) {
      return;
    }

    var now = Date.now();
    var newTweenQueue = [];

    for (var i = 0; i < state.tweenQueue.length; i++) {
      var item = state.tweenQueue[i];
      if (now - item.initTime < item.config.duration) {
        newTweenQueue.push(item);
      } else {
        item.config.onEnd && item.config.onEnd();
      }
    }

    // onEnd might trigger a parent callback that removes this component
    if (!this.isMounted()) {
      return;
    }

    this.setState({
      tweenQueue: newTweenQueue,
    });

    requestAnimationFrame(this._rafCb);
  },

  startRaf: function() {
    requestAnimationFrame(this._rafCb);
  },

};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#54728C",
    },
    titleContainer: {
        flexDirection: 'row',
        paddingBottom: 2
    },
    title: {
        //flex: 0,
        //backgroundColor: '#f3f3f3',
        alignItems: 'center',
        paddingHorizontal: 2,
        paddingVertical: 5,
    },
    spacer: {
        flex: 1,
    },
    barContainer: {
        height: 4,
        position: 'relative',
    },
    bar: {
        backgroundColor: 'blue',
        position: 'absolute',
        height: 4,
    },
    scrollView: {
      backgroundColor: '#F0F0F0',
      flex: 1,
    }
});


var SegmentedView = React.createClass({

    mixins: [tweenState.Mixin],

    propTypes: {
        duration: PropTypes.number,
        onTransitionStart: PropTypes.func,
        onTransitionEnd: PropTypes.func,
        onPress: PropTypes.func,
        renderTitle: PropTypes.func,
        titles: PropTypes.array,
        index: PropTypes.number,
        barColor: PropTypes.string,
        underlayColor: PropTypes.string,
        stretch: PropTypes.bool,
        selectedTitleStyle: PropTypes.object,
        titleStyle: PropTypes.object,
    },

    getDefaultProps() {
        return {
            duration: 200,
            onTransitionStart: ()=>{},
            onTransitionEnd: ()=>{},
            onPress: ()=>{},
            renderTitle: null,
            index: 0,
            barColor: '#8DA7BE',
            underlayColor: '#8DA7BE',
            stretch: false,
            selectedTextStyle: null,
            textStyle: null,
            titleStyle: {color: '#FFFFFF', fontFamily: 'futura', fontSize: 15},
        };
    },

    getInitialState() {
        return {
            barLeft: 0,
            barRight: screen.width,
        };
    },

    componentDidMount() {
        setTimeout(() => this.moveTo(this.props.index), 0);
    },

    componentWillReceiveProps(nextProps) {
        this.moveTo(nextProps.index);
    },

    measureHandler(ox, oy, width) {

        this.tweenState('barLeft', {
            easing: tweenState.easingTypes.easeInOutQuad,
            duration: 100,
            endValue: ox
        });

        this.tweenState('barRight', {
            easing: tweenState.easingTypes.easeInOutQuad,
            duration: 100,
            endValue: screen.width - ox - width,
            onEnd: this.props.onTransitionEnd
        });

        setTimeout(this.props.onTransitionStart, 0);
    },

    moveTo(index) {
        this.refs[index].measure(this.measureHandler);
    },

    _renderTitle(title, i) {
        return (
            <View style={styles.title}>
                <Text style={[this.props.titleStyle, i === this.props.index && this.props.selectedTitleStyle]}>{title}</Text>
            </View>
        );
    },

    renderTitle(title, i) {
        return (
            <View key={i} ref={i} style={{ flex: this.props.stretch ? 1 : 0 }}>
                <TouchableHighlight underlayColor={this.props.underlayColor} onPress={() => this.props.onPress(i)}>
                    {this.props.renderTitle ? this.props.renderTitle(title, i) : this._renderTitle(title, i)}
                </TouchableHighlight>
            </View>
        );
    },

    render() {
        var items = [];
        var views = [];
        var titles = this.props.titles;

        if (!this.props.stretch) {
            items.push(<View key={`s`} style={styles.spacer} />);
        }

        for (var i = 0; i < titles.length; i++) {
            items.push(this.renderTitle(titles[i], i));
            if (!this.props.stretch) {
                items.push(<View key={`s${i}`} style={styles.spacer} />);
            }
        }

        if(this.props.index === 0) {
          currView = <Stream />;
        }
        else if (this.props.index === 1){
          currView = <Hacker />;
        }
        else {
          currView = <Educator/>;
        }

        return (
            <View {...this.props} style={[styles.container, this.props.style]}>
                <View style={styles.barContainer}>
                    <View ref="bar" style={[styles.bar, {
                        left: this.getTweeningValue('barLeft'),
                        right: this.getTweeningValue('barRight'),
                        backgroundColor: this.props.barColor
                    }]} />
                </View>
                <View style={styles.titleContainer}>
                    {items}
                </View>
                 <ScrollView style={styles.scrollView}
                     automaticallyAdjustContentInsets={false}
                     contentInset={{bottom: 50}}>
                    {currView}
                  </ScrollView>
            </View>
        );
    }
});

module.exports = SegmentedView;