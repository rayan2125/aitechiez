import React, { useRef, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

const SpinnerIcon = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const spinValue = useRef(new Animated.Value(0)).current;

  const startSpinner = () => {
    setIsSpinning(true);
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        // duration: 1000,
        useNativeDriver: true,
      })
    ).start();
    // Simulating an asynchronous task
    setTimeout(() => {
      setIsSpinning(false);
      spinValue.setValue(0);
    }, 5000);
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg',],
  });

  return (


    <>
      <TouchableOpacity >
        <Animated.View style={[styles.icon, { transform: [{ rotate: spin }] }]}>
          {/* <Icon name ='plus'/> */}
          <View style={{ borderRadius: 100, width: 20, height: 20, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>

            <Text style={{ fontSize: 26, fontWeight: 20, }}> ...</Text>
          </View>
        </Animated.View>
        {/* {isSpinning && (
        <View style={styles.spinnerOverlay}>
         <Text>hii</Text>
        </View>
      )} */}
      </TouchableOpacity>
      <TouchableOpacity onPress={startSpinner}>
        <View >
          <Text>Press me </Text>
        </View>
      </TouchableOpacity>

    </>

  );
};

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    // Define your icon styles
  },
  spinnerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    // Define your spinner overlay styles
  },
});

export default SpinnerIcon;
