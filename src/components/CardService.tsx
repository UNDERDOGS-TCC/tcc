import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';

interface CardServiceProps {
  cardTitle: string;
  iconName: 'file-document-edit-outline';
  iconSize: number;
  iconColor: string;
}

const CardService: React.FC<CardServiceProps> = ({cardTitle, iconName, iconSize, iconColor}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container}>
      <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />
      <Text style={styles.cardText}>{cardTitle}</Text>
    </TouchableOpacity>
  );
};

export default CardService;

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#F0EFEF',
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    flexGrow: 1,
    flexBasis: 0,
    justifyContent: 'space-evenly',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#00000052',
    borderRadius: 20,
  },
  cardText: {
    color: 'rgba(0, 52, 107, 1)',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontWeight: '600',
    textAlign: 'center',
  },
});
