import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signup from './Signup';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const images = {
    usuario: require('../../assets/usuario.png'),
    carropolicia: require('../../assets/carro-policia.png'),
    carroambulancia: require('../../assets/carro-ambulancia.png'),
    carrobombeiro: require('../../assets/bombeiro-carro.png'),
  };

  const Drawer = createDrawerNavigator();

  return (
    <View>
      <View style={styles.user}>
        <Text style={styles.TextGoodMorning}>Good Morning{"\n"}
          <Text style={styles.TextNome}>Igor Ferráz
          </Text>
          </Text>
        <Image style={styles.homeImageUser} source={images.usuario} />
      </View>

      <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', padding: 25, marginTop: -20}}>Serviços</Text>

      <View>
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
            height: 130,
            width: 345,
            alignSelf: 'center',
            alignItems: 'center',
            display: 'flex',
            backgroundColor: '#C1C1C1',
            borderRadius: 20,
          }}
        >
          <View style={styles.container}>
            <Image style={styles.ImagePolice} source={images.carropolicia} />
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30, padding: 38 }}>Polícia</Text>
          </View>
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
            height: 130,
            width: 345,
            marginTop: 10,

            alignSelf: 'center',
            alignItems: 'center',
            display: 'flex',
            backgroundColor: '#B6DCF1',
            borderRadius: 20,
          }}
        >
          <View style={styles.container}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30, padding: 38 }}>Samu</Text>
            <Image style={styles.ImageAmbulance} source={images.carroambulancia} />
          </View>
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
            height: 130,
            width: 345,
            marginTop: 10,

            alignSelf: 'center',
            alignItems: 'center',
            display: 'flex',
            backgroundColor: '#FDBFBF',
            borderRadius: 20,
          }}
        >
          <View style={styles.container}>
            <Image style={styles.ImageFireman} source={images.carrobombeiro} />
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30, padding: 33 }}>Bombeiro</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    alignItems: 'center',
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 100,
    flexDirection: 'row',
  },
  homeImageUser: {
    width: 80,
    height: 80,
  },
  TextGoodMorning: {
    color: 'black',
    paddingHorizontal: 55,
  },
  TextNome: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  servicos: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ImagePolice: {
    padding: 70,
    width: 20,
    height: 20,
    marginTop: 5,
  },
  ImageAmbulance: {
    padding: 60,
    width: 20,
    height: 20,
    marginTop: 5,
  },
  ImageFireman: {
    padding: 60,
    width: 20,
    height: 20,
    marginTop: 5,
  },
});
