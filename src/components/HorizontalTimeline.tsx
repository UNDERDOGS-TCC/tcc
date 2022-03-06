import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const HorizontalTimeline: React.FC = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const handleAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(138, 138, 138)', 'rgb(15, 252, 3)'],
  });

  const animatedStyle = {
    backgroundColor: boxInterpolation,
  };

  useEffect(() => {
    handleAnimation();
  }, []);

  return (
    <View style={styles.container}>
      {/* <View style={styles.circle} />
      <View style={styles.line}></View>
      <View style={styles.line}></View>
      <View style={styles.circle} />
      <View style={styles.line}></View>
      <View style={styles.line}></View>
      <View style={styles.circle} /> */}
      <Animated.View style={{...styles.line, ...animatedStyle}} />
      <Animated.View style={{...styles.line, ...animatedStyle}} />
      <Animated.View style={{...styles.line, ...animatedStyle}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 5,
    borderWidth: 5,
    borderColor: 'rgb(138, 138, 138)',
    width: 150,
    marginHorizontal: 1,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'lightgreen',
  },
});

export default HorizontalTimeline;
