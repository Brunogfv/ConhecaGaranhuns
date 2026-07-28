import React, { useCallback, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

export default function MapViewWrapper({
  places = [],
  region,
  onPlacePress,
  onMapReady: onParentMapReady,
  style,
  ...props
}) {
  const mapRef = useRef(null);

  const handleMapReady = useCallback(() => {
    if (places.length === 0) return;

    onParentMapReady?.();

    if (places.length === 1) {
      mapRef.current?.animateToRegion(
        {
          latitude: places[0].coordinate.latitude,
          longitude: places[0].coordinate.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        },
        500
      );
    } else {
      mapRef.current?.fitToCoordinates(
        places.map((p) => p.coordinate),
        {
          edgePadding: { top: 60, right: 60, bottom: 60, left: 60 },
          animated: true
        }
      );
    }
  }, [places, onParentMapReady]);

  return (
    <MapView
      ref={mapRef}
      style={[styles.map, style]}
      initialRegion={region}
      onMapReady={handleMapReady}
      {...props}
    >
      {places.map((place) => (
        <Marker
          key={place.id}
          coordinate={place.coordinate}
          title={place.name}
          description={place.category}
          onCalloutPress={() => onPlacePress?.(place)}
        >
          <Callout>
            <View style={styles.callout}>
              <Text style={styles.calloutTitle}>{place.name}</Text>
              <Text style={styles.calloutCategory}>{place.category}</Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },

  callout: {
    width: 180,
    padding: 6
  },

  calloutTitle: {
    color: '#1a1a1a',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2
  },

  calloutCategory: {
    color: '#1a6b4a',
    fontSize: 12,
    fontWeight: '600'
  }
});
