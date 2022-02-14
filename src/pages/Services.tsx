import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import CallService from '../components/CallService';
import CardService from '../components/CardService';
import {ambulanceCards, firemanCards, policeCards} from '../utils/service-cards';

interface ServicesProps {
  service: 'police' | 'ambulance' | 'fireman';
}

const Services: React.FC = () => {
  const navigation = useNavigation();
  const {params} = useRoute() as {params: ServicesProps};

  useEffect(() => {
    navigation.setOptions({
      title:
        params.service === 'police'
          ? 'Polícia'
          : params.service === 'ambulance'
          ? 'Samu'
          : 'Bombeiro',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontFamily: 'Archivo_700Bold',
      },
      headerShadowVisible: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CallService service={params.service} />
        <Text style={styles.otherServicesText}>Outros Serviços</Text>

        {params.service === 'police' &&
          policeCards.map((item) => (
            <CardService
              key={item.id}
              icon={item.key as any}
              title={item.title}
              description={item.description}
              service={params.service}
            />
          ))}

        {params.service === 'ambulance' &&
          ambulanceCards.map((item) => (
            <CardService
              key={item.id}
              icon={item.key as any}
              title={item.title}
              description={item.description}
              service={params.service}
            />
          ))}

        {params.service === 'fireman' &&
          firemanCards.map((item) => (
            <CardService
              key={item.id}
              icon={item.key as any}
              title={item.title}
              description={item.description}
              service={params.service}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  otherServicesText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 24,
    marginLeft: '5%',
  },
});
