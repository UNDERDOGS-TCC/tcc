import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

interface HomeProps {
  service: 'usuario';
}

const Home: React.FC<HomeProps> = ({service}) => {
  const navigation = useNavigation();
  const images = {
    usuario: require('../../assets/usuario.png'),
  };

  return (
    <View style={{}}
    >
      <Text
        style={{
          color: 'black',
          paddingVertical: 40,
          padding: 60,
        }}
      >
        Good Morning{"\n"}
        <Text
        style={{
          color: 'black',
          paddingVertical: 20,
          fontSize: 25,
          fontWeight: 'bold',
        }}
        >
        Igor Ferráz
        <Image style={styles.homeImageUser} source={images.usuario} />
      </Text>
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

const styles = StyleSheet.create({
  homeImageUser: {
    width: '20%',
    height: '70%',
  },
});
