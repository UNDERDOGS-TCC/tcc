import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {SimpleLineIcons, Feather} from '@expo/vector-icons';

const MapSearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftIcon}>
        <SimpleLineIcons name="location-pin" size={24} color="black" />
      </View>
      <TextInput style={styles.textMiddle} placeholder="Sua localização" />
      <View style={styles.rightIcon}>
        <Feather name="search" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#fff',
    height: 50,
    width: '90%',
    top: '12%',
    alignSelf: 'center',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: '#000',
  },
  leftIcon: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textMiddle: {
    paddingHorizontal: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontFamily: 'Archivo_400Regular',
    fontSize: 18,
  },
  rightIcon: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default MapSearchBar;
