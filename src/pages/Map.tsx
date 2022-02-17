import React, {useEffect, useRef} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {LocationObject} from 'expo-location';
import CenterMapButton from '../components/CenterMapButton';
import MapComponent from '../components/MapComponent';
import {centerMapOnUser, fitAllMarkers} from '../utils/map-functions';

interface MapProps {
  service: 'police' | 'ambulance' | 'fireman';
  location: LocationObject;
}

const Map: React.FC = () => {
  const {params} = useRoute() as {params: MapProps};
  const initialLocation = params.location;
  const navigation = useNavigation();

  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: false,
      title: '',
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MapComponent
        centerMapOnUser={centerMapOnUser}
        mapRef={mapRef}
        initialLocation={initialLocation}
        fitAllMarkers={fitAllMarkers}
      />
      <CenterMapButton
        mapRef={mapRef}
        initialLocation={initialLocation}
        fitAllMarkers={fitAllMarkers}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Map;
