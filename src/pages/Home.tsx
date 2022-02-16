import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
      }}
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
              service: 'police',
            } as never,
          );
        }}
        activeOpacity={0.5}
        style={{
          paddingHorizontal: 30,
          paddingVertical: 20,
          backgroundColor: '#444647',
          borderRadius: 10,
        }}
      >
        <Text style={{color: 'black'}}>Ir para policias</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(
            'Services' as never,
            {
              service: 'ambulance',
            } as never,
          );
        }}
        activeOpacity={0.5}
        style={{
          paddingHorizontal: 30,
          paddingVertical: 20,
          backgroundColor: '#2723ff',
          borderRadius: 10,
        }}
      >
        <Text style={{color: 'black'}}>Ir para ambulancias</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(
            'Services' as never,
            {
              service: 'fireman',
            } as never,
          );
        }}
        activeOpacity={0.5}
        style={{
          paddingHorizontal: 30,
          paddingVertical: 20,
          backgroundColor: '#ff2323',
          borderRadius: 10,
        }}
      >
        <Text style={{color: 'black'}}>Ir para bombeiros</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
