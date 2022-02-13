import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

interface CardServiceParams {
  icon: 'bo' | 'security' | 'report' | 'chat';
  title: string;
  description: string;
}

const CardService: React.FC<CardServiceParams> = ({title, description, icon}) => {
  const icons = {
    bo: require('../../assets/boletim-de-ocorrencia.png'),
    security: require('../../assets/orientacao-de-seguranca.png'),
    report: require('../../assets/denuncia.png'),
    chat: require('../../assets/chat.png'),
  };

  return (
    <View style={styles.cardsContainer}>
      <TouchableOpacity activeOpacity={0.6} style={styles.cardService}>
        <View style={styles.iconContainer}>
          <Image style={{height: '70%', width: '70%'}} source={icons[icon]} />
        </View>
        <View style={styles.iconText}>
          <Text style={styles.iconTextTitle}>{title}</Text>
          <Text style={styles.iconTextDescription}>{description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardService;

const styles = StyleSheet.create({
  cardsContainer: {
    marginTop: '3%',
    width: '100%',
    height: 150,
  },
  cardService: {
    borderRadius: 24,
    marginHorizontal: '5%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  iconText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    marginRight: 10,
  },
  iconTextTitle: {
    fontFamily: 'Archivo_600SemiBold_Italic',
    fontSize: 22,
    color: '#383838',
  },
  iconTextDescription: {
    fontFamily: 'Archivo_400Regular',
    fontSize: 14,
    color: '#828181',
  },
});
