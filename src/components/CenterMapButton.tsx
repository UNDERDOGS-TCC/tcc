import {LocationObject} from 'expo-location';
import React, {RefObject} from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import MapView, {LatLng} from 'react-native-maps';

interface CenterMapButtonProps {
  fitAllMarkers: (origin: LatLng, mapRef: RefObject<MapView>) => void;
  initialLocation: LocationObject;
  mapRef: RefObject<MapView>;
}

const CenterMapButton: React.FC<CenterMapButtonProps> = ({
  fitAllMarkers,
  initialLocation,
  mapRef,
}) => {
  const location = {
    latitude: initialLocation.coords.latitude,
    longitude: initialLocation.coords.longitude,
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => fitAllMarkers(location, mapRef)}
      style={styles.centerIconContainer}
    >
      <Image
        style={{width: 40, height: 40}}
        source={require('../../assets/Maps-Center-Direction-icon.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  centerIconContainer: {
    position: 'absolute',
    bottom: '5%',
    left: '82%',
    backgroundColor: '#fff',
    borderRadius: 30,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CenterMapButton;