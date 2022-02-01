import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import CallService from '../components/CallService';

const Services: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CallService buttonImage="police" buttonTitle="Acionar polícia" />
    </SafeAreaView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
