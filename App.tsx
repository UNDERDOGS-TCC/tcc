import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/Routes';
import {StatusBar} from 'expo-status-bar';
import {
  useFonts,
  Archivo_400Regular,
  Archivo_400Regular_Italic,
  Archivo_500Medium,
  Archivo_500Medium_Italic,
  Archivo_600SemiBold,
  Archivo_600SemiBold_Italic,
  Archivo_700Bold,
  Archivo_700Bold_Italic,
} from '@expo-google-fonts/archivo';
import AppLoading from 'expo-app-loading';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_400Regular_Italic,
    Archivo_500Medium,
    Archivo_500Medium_Italic,
    Archivo_600SemiBold,
    Archivo_600SemiBold_Italic,
    Archivo_700Bold,
    Archivo_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Routes />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
};

export default App;
