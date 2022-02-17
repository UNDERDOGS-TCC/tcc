import {RefObject} from 'react';
import {Platform} from 'react-native';
import MapView, {LatLng} from 'react-native-maps';

export const centerMapOnUser = (coords: LatLng, mapRef: RefObject<MapView>) => {
  const map = mapRef.current;
  map?.animateToRegion(
    {
      latitude: coords.latitude,
      longitude: coords.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    },
    1000,
  );
};

export const fitAllMarkers = (originCoords: LatLng, mapRef: RefObject<MapView>) => {
  const origin = {
    latitude: originCoords.latitude,
    longitude: originCoords.longitude,
  };
  const destination = {latitude: -23.475088, longitude: -46.568842};

  if (Platform.OS === 'ios') {
    mapRef?.current?.fitToSuppliedMarkers(['user', 'car'], {
      edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
      animated: true,
    });
  }

  if (Platform.OS === 'android') {
    mapRef?.current?.fitToCoordinates([origin, destination], {
      edgePadding: {top: 20, right: 20, bottom: 20, left: 20},
      animated: true,
    });
  }
};
