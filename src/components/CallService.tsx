import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const CallService: React.FC = () => {
  return (
    <View style={styles.serviceButtonContainer}>
      <TouchableOpacity activeOpacity={0.8} style={styles.serviceButton}>
        <Text style={styles.serviceButtonText}>Chamar Polícia</Text>
        <View style={styles.serviceButtonIcon}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={require('../../assets/carro-policia.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CallService;

const styles = StyleSheet.create({
  serviceButtonContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceButton: {
    width: '90%',
    height: '80%',
    backgroundColor: '#C1C1C1',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  serviceButtonIcon: {
    width: '50%',
  },
  serviceButtonText: {
    width: '50%',
    color: '#383838',
    fontFamily: 'Archivo_700Bold',
    fontSize: 34,
    textAlign: 'center',
  },
});
