import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import CallService from '../components/CallService';
import {useNavigation, useRoute} from '@react-navigation/native';
import CardService from '../components/CardService';
import {policeCards, ambulanceCards, firemanCards} from '../utils/service-cards';

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
            ? 'Acionar SAMU'
            : 'Acionar bombeiro'
        }
      />
      <View style={styles.otherServicesContainer}>
        <Text style={styles.otherServicesText}>Outros Serviços</Text>
      </View>
      <View style={styles.cardsContainer}>
        <FlatList
          data={
            params.service === 'police'
              ? policeCards
              : params.service === 'ambulance'
              ? ambulanceCards
              : firemanCards
          }
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <CardService
              cardTitle={item.title}
              iconColor={item.color}
              iconSize={item.size}
              iconName={item.icon as 'file-document-edit-outline'}
            />
          )}
        />
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
    fontSize: 25,
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 2,
  },
  cardsContainer: {
    flex: 1,
    marginBottom: 20,
  },
});
