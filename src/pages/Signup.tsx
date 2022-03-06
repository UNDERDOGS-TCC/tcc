import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import HorizontalTimeline from '../components/HorizontalTimeline';

const Signup: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HorizontalTimeline />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Bem vindo ao XXX app</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    width: '100%',
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: 'Archivo_500Medium',
  },
});

export default Signup;
