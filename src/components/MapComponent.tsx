import {LocationObject} from 'expo-location';
import React, {RefObject} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import MapView, {LatLng, MapEvent, Marker} from 'react-native-maps';

interface MapComponentProps {
  initialLocation: LocationObject;
  mapRef: RefObject<MapView>;
  centerMapOnUser: (coords: LatLng, mapRef: RefObject<MapView>) => void;
  fitAllMarkers: (origin: LatLng, mapRef: RefObject<MapView>) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({
  initialLocation,
  mapRef,
  centerMapOnUser,
  fitAllMarkers,
}) => {
  const userLocation = {
    latitude: initialLocation.coords.latitude,
    longitude: initialLocation.coords.longitude,
  };

  // TODO: destination vai vir da API
  const carLocation = {latitude: -23.573474, longitude: -46.749583};

  return (
    <MapView
      ref={mapRef}
      mapType="mutedStandard"
      onMapReady={() => fitAllMarkers(userLocation, mapRef)}
      style={styles.mapContainer}
    >
      {/* TODO: uncomment this part when we start to test polylines
      <MapViewDirections
        origin={{latitude: -23.573474, longitude: -46.749583}}
        destination={{
          latitude: origin.latitude,
          longitude: origin.longitude,
        }}
        apikey={GOOGLE_MAPS_API_KEY}
        strokeWidth={3}
        language="pt-BR"
        precision="high"
      /> */}
      <Marker
        identifier="user"
        coordinate={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
        }}
        onPress={(e: MapEvent) => centerMapOnUser(e.nativeEvent.coordinate, mapRef)}
      >
        <View style={styles.userImageContainer}>
          <Image
            style={{height: '100%', width: '100%', borderRadius: 30}}
            source={require('../../assets/me.jpg')}
          />
        </View>
      </Marker>
      {carLocation && (
        <Marker
          onPress={(e: MapEvent) => centerMapOnUser(e.nativeEvent.coordinate, mapRef)}
          identifier="car"
          coordinate={carLocation}
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  userImageContainer: {
    height: 50,
    width: 50,
  },
});

export default MapComponent;
