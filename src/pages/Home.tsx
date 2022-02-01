import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const [serviceType, setServiceType] = useState('');
  const navigation = useNavigation();

  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}
    >
      <Text
        style={{
          color: 'black',
          paddingVertical: 20,
        }}
      >
        Eu sou a Home
      </Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Signup' as never);
        }}
        activeOpacity={0.5}
        style={{
          paddingHorizontal: 30,
          paddingVertical: 20,
          backgroundColor: '#23aeff',
          borderRadius: 10,
        }}
      >
        <Text style={{color: 'black'}}>Ir para signup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(
            'Services' as never,
            {
              service: serviceType,
            } as never,
          );
        }}
        activeOpacity={0.5}
        style={{
          paddingHorizontal: 30,
          paddingVertical: 20,
          backgroundColor: '#23aeff',
          borderRadius: 10,
        }}
      >
        <Text style={{color: 'black'}}>Ir para Services</Text>
      </TouchableOpacity>
      <TextInput onChangeText={setServiceType} value={serviceType} />
    </View>
  );
};

export default Home;
