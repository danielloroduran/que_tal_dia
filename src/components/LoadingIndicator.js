import React from 'react';
import {MotiView} from 'moti';
import {StyleSheet} from 'react-native';

const LoadingIndicator = () => {
  return (
    <MotiView
      from={{
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 0,
        shadowOpacity: 0.5,
      }}
      animate={{
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 4,
        shadowOpacity: 1,
      }}
      transition={{
        type: 'timing',
        duration: 1000,
        loop: true,
      }}
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        shadowColor: '#FFFFFF',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
      }}
    />
  );
};

const styles = StyleSheet.create({
  loading: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    shadowColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});

export default LoadingIndicator;
