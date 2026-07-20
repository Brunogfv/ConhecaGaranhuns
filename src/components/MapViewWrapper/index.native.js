import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

export default function MapViewWrapper({
  places = [],
  region,
  onPlacePress,
  style,
  ...props
}) {
  return (
    <MapView
      style={[styles.map, style]}
      initialRegion={region}
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
