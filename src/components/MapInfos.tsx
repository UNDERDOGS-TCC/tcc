import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import MapInfosRightText from './MapInfosRightText';

const MapInfos: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);

  const handleCancelButton = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.infosContainer}>
        {isSearching ? (
          <View style={{justifyContent: 'space-evenly', height: '100%'}}>
            <ActivityIndicator size="large" color="#00346C" />
            <Text style={styles.searchingText}>Buscando a viatura mais próxima</Text>
          </View>
        ) : (
          <>
            <View style={styles.infosSides}>
              <Text>MapInfos</Text>
            </View>
            <View style={styles.infosSides}>
              <MapInfosRightText title="Distância" number="20" type="km" />
              <MapInfosRightText title="Tempo de espera" number="30" type="min" />
            </View>
          </>
        )}
      </View>
      <TouchableOpacity
        onPress={() => handleCancelButton()}
        activeOpacity={0.8}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>CANCELAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#fff',
    height: 200,
    width: '90%',
    bottom: 30,
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 0.3,
    borderColor: '#000',
  },
  searchingText: {
    fontFamily: 'Archivo_400Regular',
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
  infosContainer: {
    height: '70%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infosSides: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonContainer: {
    height: '25%',
    width: '90%',
    borderRadius: 20,
    backgroundColor: '#00346C',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: '#000',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Archivo_400Regular',
    fontSize: 18,
  },
});

export default MapInfos;
