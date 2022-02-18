import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface MapInfosRightTextProps {
  title: string;
  number: string;
  type: string;
}

const MapInfosRightText: React.FC<MapInfosRightTextProps> = ({title, number, type}) => {
  return (
    <View>
      <View>
        <Text style={styles.infoRightTitles}>{title}</Text>
      </View>
      <View style={styles.infoRightNumbersContainer}>
        <Text style={styles.infoRightNumbers}>{number} </Text>
        <Text style={styles.infoRightTitles}>{type}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoRightTitles: {
    fontFamily: 'Archivo_400Regular',
    fontSize: 15,
  },
  infoRightNumbers: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 18,
  },
  infoRightNumbersContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default MapInfosRightText;
