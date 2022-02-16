import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Loader from './Loader';

interface CardServiceParams {
  icon: 'bo' | 'security' | 'report' | 'chat' | 'vistoria' | 'emergency' | 'health';
  title: string;
  description: string;
  service: string;
}

const CardService: React.FC<CardServiceParams> = ({title, description, icon, service}) => {
  const [isLoading, setIsLoading] = useState(false);

  const icons = {
    bo: require('../../assets/boletim-de-ocorrencia.png'),
    security: require('../../assets/orientacao-de-seguranca.png'),
    report: require('../../assets/denuncia.png'),
    chat: require('../../assets/chat.png'),
    vistoria: require('../../assets/fireman.png'),
    emergency: require('../../assets/formulario-de-emergencia.png'),
    health: require('../../assets/saude.png'),
  };

  const handleTouch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.cardsContainer}>
      <Loader loading={isLoading} />
      {service === 'police' && (
        <TouchableOpacity
          onPress={() => handleTouch()}
          activeOpacity={0.6}
          style={[styles.cardService, {backgroundColor: '#ECECEC'}]}
        >
          <View style={styles.iconContainer}>
            <Image style={{height: '80%', width: '70%'}} source={icons[icon]} />
          </View>
          <View style={styles.iconText}>
            <Text style={styles.iconTextTitle}>{title}</Text>
            <Text style={styles.iconTextDescription}>{description}</Text>
          </View>
        </TouchableOpacity>
      )}

      {service === 'ambulance' && (
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.cardService, {backgroundColor: '#E4F6FF'}]}
        >
          <View style={styles.iconContainer}>
            <Image style={{height: '80%', width: '70%'}} source={icons[icon]} />
          </View>
          <View style={styles.iconText}>
            <Text style={styles.iconTextTitle}>{title}</Text>
            <Text style={styles.iconTextDescription}>{description}</Text>
          </View>
        </TouchableOpacity>
      )}

      {service === 'fireman' && (
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.cardService, {backgroundColor: '#FFE1E1'}]}
        >
          <View style={styles.iconContainer}>
            <Image style={{height: '80%', width: '70%'}} source={icons[icon]} />
          </View>
          <View style={styles.iconText}>
            <Text style={styles.iconTextTitle}>{title}</Text>
            <Text style={styles.iconTextDescription}>{description}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CardService;

const styles = StyleSheet.create({
  cardsContainer: {
    marginTop: '3%',
    marginBottom: '5%',
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
    textAlign: 'center',
  },
  iconTextDescription: {
    fontFamily: 'Archivo_400Regular',
    textAlign: 'center',
    fontSize: 14,
    color: '#828181',
  },
});
