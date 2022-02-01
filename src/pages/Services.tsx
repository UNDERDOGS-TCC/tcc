import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import CallService from '../components/CallService';
import {useNavigation, useRoute} from '@react-navigation/native';

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
          ? 'Ambulância'
          : 'Bombeiro',
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <CallService
        service={params.service}
        buttonTitle={
          params.service === 'police'
            ? 'Acionar polícia'
            : params.service === 'ambulance'
            ? 'Acionar ambulância'
            : 'Acionar bombeiro'
        }
      />
      <View style={styles.otherServicesContainer}>
        <Text style={styles.otherServicesText}>Outros Serviços</Text>
      </View>
    </SafeAreaView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  otherServicesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  otherServicesText: {
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontWeight: '600',
    fontSize: 22,
  },
});
