import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

interface CallServiceProps {
  buttonTitle: string;
  buttonImage: 'police' | 'ambulance' | 'fireman';
}

const CallService: React.FC<CallServiceProps> = ({buttonImage, buttonTitle}) => {
  const images = {
    police: require('../../assets/policia_civil_brasao.png'),
    ambulance: null,
    fireman: null,
  };

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.callServiceButtonContainer}>
      <Text style={styles.callServiceButtonFont}>{buttonTitle}</Text>
      <Image style={styles.callServiceImage} source={images[buttonImage]} />
    </TouchableOpacity>
  );
};

export default CallService;

const styles = StyleSheet.create({
  callServiceButtonContainer: {
    backgroundColor: '#3A3B3C',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: 'rgba(0, 0, 0, 0.28)',
    height: '20%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  callServiceButtonFont: {
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontWeight: '800',
    fontSize: 35,
    color: '#fff',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 20,
  },
  callServiceImage: {
    width: '20%',
    height: '70%',
  },
});
