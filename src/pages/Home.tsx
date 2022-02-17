import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';



const Home: React.FC = () => {
  const navigation = useNavigation();
  const images = {
    usuario: require('../../assets/usuario.png'),
    carropolicia: require('../../assets/carro-policia.png'),
    carroambulancia: require('../../assets/carro-ambulancia.png'),
    carrobombeiro: require('../../assets/bombeiro-carro.png'),
  };

  return (
    <View
    >
      <View style={styles.container}>
        <Text style={{ color: 'black', paddingVertical: 30, padding: 60, }}> Good Morning{"\n"}
          <Text style={{ color: 'black', paddingVertical: 20, fontSize: 25, fontWeight: 'bold', }}>Igor Ferráz
          </Text>
        </Text>
        <Image style={styles.homeImageUser} source={images.usuario} />
      </View>
      
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
            height: 110,
            width: 340,

            alignSelf:'center',
            alignItems: 'center',
            display: 'flex',
            backgroundColor: '#C1C1C1',
            borderRadius: 20,
          }}
        >
          <View style={styles.container}>
          <Image style={styles.ImagePolice} source={images.carropolicia} />
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30, padding: 30,}}>Polícia</Text>
          </View>
        </TouchableOpacity>
        {"\n"}
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
          height: 110,
          width: 340,
          marginTop: 10,

          alignSelf:'center',
          alignItems: 'center',
          display: 'flex',
          backgroundColor: '#B6DCF1',
          borderRadius: 20,
        }}
      >
        <View style={styles.container}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30, padding: 30,}}>Samu</Text>
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
          height: 110,
          width: 340,
          marginTop: 10,

          alignSelf:'center',
          alignItems: 'center',
          display: 'flex',
          backgroundColor: '#FDBFBF',
          borderRadius: 20,
        }}
      >
        <View style={styles.container}>
        <Image style={styles.ImageFireman} source={images.carrobombeiro} />
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30, padding: 30,}}>Bombeiro</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeImageUser: {
    width: 80,
    height: 80,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  ImagePolice: {
    padding: 60,
    width: 20,
    height: 20,
  },
  ImageAmbulance: {
    padding: 50,
    width: 20,
    height: 20,
  },
  ImageFireman: {
    padding: 50,
    width: 20,
    height: 20,
  },
});
