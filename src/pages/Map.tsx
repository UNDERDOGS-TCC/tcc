import React, {useEffect, useRef} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Platform, StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import {LocationObject} from 'expo-location';
import CenterMapButton from '../components/CenterMapButton';
import MapComponent from '../components/MapComponent';
import {centerMapOnUser, fitAllMarkers} from '../utils/map-functions';
import MapSearchBar from '../components/MapSearchBar';
import MapInfos from '../components/MapInfos';
import {setStatusBarBackgroundColor, setStatusBarTranslucent} from 'expo-status-bar';

interface MapProps {
  service: 'police' | 'ambulance' | 'fireman';
  location: LocationObject;
}

const Map: React.FC = () => {
  const {params} = useRoute() as {params: MapProps};
  const userLocation = params.location;
  const navigation = useNavigation();

  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: false,
      title: '',
    });
    if (Platform.OS === 'android') {
      setStatusBarTranslucent(true);
      setStatusBarBackgroundColor('transparent', true);
    }
  }, []);

  return (
    <View style={styles.container}>
      <MapComponent
        centerMapOnUser={centerMapOnUser}
        mapRef={mapRef}
        initialLocation={userLocation}
        fitAllMarkers={fitAllMarkers}
      />
      <MapSearchBar />
      <CenterMapButton mapRef={mapRef} userLocation={userLocation} fitAllMarkers={fitAllMarkers} />
      <MapInfos />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Map;
