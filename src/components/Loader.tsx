import React, {useEffect, useState} from 'react';
import {setStatusBarBackgroundColor} from 'expo-status-bar';
import {ActivityIndicator, Modal, View, StyleSheet, Text} from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({loading}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(loading);

    if (!loading) {
      setStatusBarBackgroundColor('#fff', true);
      NavigationBar.setBackgroundColorAsync('#000');
    } else {
      setStatusBarBackgroundColor('#00000040', true);
      NavigationBar.setBackgroundColorAsync('#000');
    }
  }, [loading]);

  return (
    <Modal
      onRequestClose={() => setIsLoading(false)}
      transparent={true}
      animationType={'fade'}
      visible={isLoading}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" color="#00346C" />
          <Text style={styles.loaderTextDescription}>Carregando...</Text>
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: '20%',
    width: '80%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  loaderTextDescription: {
    fontFamily: 'Archivo_400Regular',
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
});
