import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

interface CallServiceProps {
  service: string;
}

const CallService: React.FC<CallServiceProps> = ({service}) => {
  const images = {
    police: require('../../assets/carro-policia.png'),
    ambulance: require('../../assets/carro-ambulancia.png'),
    fireman: require('../../assets/bombeiro-carro.png'),
  };

  return (
    <View style={styles.serviceButtonContainer}>
      {service === 'police' && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.serviceButton, {backgroundColor: '#C1C1C1'}]}
        >
          <Text style={styles.serviceButtonText}>Chamar Polícia</Text>
          <View style={styles.serviceButtonIcon}>
            <Image style={{height: '100%', width: '100%'}} source={images[service]} />
          </View>
        </TouchableOpacity>
      )}

      {service === 'ambulance' && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.serviceButton, {backgroundColor: '#B6DCF1'}]}
        >
          <View style={[styles.serviceButtonIcon, {transform: [{scaleX: -1}]}]}>
            <Image style={{height: '80%', width: '80%'}} source={images[service]} />
          </View>
          <Text style={styles.serviceButtonText}>Chamar Samu</Text>
        </TouchableOpacity>
      )}

      {service === 'fireman' && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.serviceButton, {backgroundColor: '#FDBFBF'}]}
        >
          <Text style={styles.serviceButtonText}>Chamar Bombeiro</Text>
          <View style={[styles.serviceButtonIcon, {transform: [{scaleX: -1}]}]}>
            <Image style={{height: '80%', width: '80%'}} source={images[service]} />
          </View>
        </TouchableOpacity>
      )}
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
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  serviceButtonIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  serviceButtonText: {
    flex: 1,
    color: '#383838',
    fontFamily: 'Archivo_700Bold',
    fontSize: 34,
    textAlign: 'center',
    marginHorizontal: 10,
  },
});
