import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

interface CallServiceProps {
  buttonTitle: string;
  service: 'police' | 'ambulance' | 'fireman';
}

const CallService: React.FC<CallServiceProps> = ({service, buttonTitle}) => {
  const images = {
    police: require('../../assets/policia_civil_brasao.png'),
    ambulance: require('../../assets/samu_brasao.png'),
    fireman: require('../../assets/bombeiro_civil_brasao.png'),
  };

  return (
    <>
      {service === 'police' && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.callServiceButtonContainer, styles.callServiceButtonBackgroudBlack]}
        >
          <Text style={[styles.callServiceButtonFont, styles.callServiceButtonFontPolice]}>
            {buttonTitle}
          </Text>
          <Image style={styles.callServiceImagePolice} source={images[service]} />
        </TouchableOpacity>
      )}

      {service === 'ambulance' && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.callServiceButtonContainer, styles.callServiceButtonBackgroudBlue]}
        >
          <Text style={[styles.callServiceButtonFont, styles.callServiceButtonFontAmbulance]}>
            {buttonTitle}
          </Text>
          <Image style={styles.callServiceImageAmbulance} source={images[service]} />
        </TouchableOpacity>
      )}

      {service === 'fireman' && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.callServiceButtonContainer, styles.callServiceButtonBackgroudRed]}
        >
          <Text style={[styles.callServiceButtonFont, styles.callServiceButtonFontFireman]}>
            {buttonTitle}
          </Text>
          <Image style={styles.callServiceImageFireman} source={images[service]} />
        </TouchableOpacity>
      )}
    </>
  );
};

export default CallService;

const styles = StyleSheet.create({
  callServiceButtonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 4,
    borderWidth: 4,
    height: '20%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  callServiceButtonBackgroudRed: {
    backgroundColor: '#F41011',
    borderColor: 'rgba(255, 0, 0, 0.2)',
  },
  callServiceButtonBackgroudBlue: {
    backgroundColor: '#0C62AD',
    borderColor: 'rgba(12, 98, 173, 0.24)',
  },
  callServiceButtonBackgroudBlack: {
    backgroundColor: '#3A3B3C',
    borderColor: 'rgba(0, 0, 0, 0.28)',
  },
  callServiceButtonFont: {
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontWeight: '800',
    color: '#fff',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 20,
  },
  callServiceButtonFontPolice: {
    fontSize: 35,
  },
  callServiceButtonFontAmbulance: {
    fontSize: 27,
  },
  callServiceButtonFontFireman: {
    fontSize: 30,
  },
  callServiceImagePolice: {
    width: '20%',
    height: '70%',
  },
  callServiceImageAmbulance: {
    width: '25%',
    height: '70%',
  },
  callServiceImageFireman: {
    width: '25%',
    height: '71%',
  },
});
