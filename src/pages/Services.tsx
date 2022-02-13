import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CallService from '../components/CallService';
import CardService from '../components/CardService';
import {policeCards} from '../utils/service-cards';

const Services: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Polícia',
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
        <CallService />
        <Text style={styles.otherServicesText}>Outros Serviços</Text>
        <FlatList
          data={policeCards}
          renderItem={({item}) => (
            <CardService icon={item.key as any} title={item.title} description={item.description} />
          )}
        />
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
