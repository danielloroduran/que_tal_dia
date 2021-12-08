import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';

const LoadingIndicator = () => {
  return (
    <ActivityIndicator size={50} color="#FFFFFF"/>
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
