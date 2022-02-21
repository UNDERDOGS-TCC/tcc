import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Loader from './Loader';
import * as Location from 'expo-location';

interface CallServiceProps {
  service: string;
}

const CallService: React.FC<CallServiceProps> = ({service}) => {
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const images = {
    police: require('../../assets/carro-policia.png'),
    ambulance: require('../../assets/carro-ambulancia.png'),
    fireman: require('../../assets/bombeiro-carro.png'),
  };

  const handlePress = async () => {
    setIsLoading(true);
    const location = await getLocation();
    setIsLoading(false);
    navigation.navigate('Map' as never, {service, location} as never);
  };

  const getLocation = async () => {
    const {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') return;

    const location = await Location.getCurrentPositionAsync({});
    return location;
  };

  return (
    <View style={styles.serviceButtonContainer}>
      <Loader loading={isLoading} />
      {service === 'police' && (
        <TouchableOpacity
          onPress={() => handlePress()}
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
          onPress={() => handlePress()}
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
          onPress={() => handlePress()}
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
