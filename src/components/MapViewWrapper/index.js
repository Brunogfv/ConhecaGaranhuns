import React, { useRef, useEffect, useState } from 'react';
import { Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

let NativeMapView = null;
let NativeMarker = null;
let NativeCallout = null;

if (Platform.OS !== 'web') {
  try {
    const Maps = require('react-native-maps');
    NativeMapView = Maps.default;
    NativeMarker = Maps.Marker;
    NativeCallout = Maps.Callout;
  } catch (e) {
  }
}

function openMaps(lat, lng, label) {
  const url =
    Platform.OS === 'web'
      ? `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
      : `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  Linking.openURL(url);
}

function WebMap({ places, region, onPlacePress, style }) {
  return (
    <View style={[styles.webContainer, style]}>
      <View style={styles.webHeader}>
        <Text style={styles.webTitle}>🗺️ Locais no mapa</Text>
      </View>
      {places.length === 0 ? (
        <View style={styles.webEmpty}>
          <Text style={styles.webEmptyText}>
            Nenhum local corresponde à pesquisa
          </Text>
        </View>
      ) : (
        places.map((place) => (
          <TouchableOpacity
            key={place.id}
            style={styles.webItem}
            onPress={() => onPlacePress?.(place)}
          >
            <View style={styles.webItemDot}>
              <Text>📍</Text>
            </View>
            <View style={styles.webItemContent}>
              <Text style={styles.webItemName}>{place.name}</Text>
              <Text style={styles.webItemCategory}>{place.category}</Text>
            </View>
            <TouchableOpacity
              style={styles.webItemButton}
              onPress={() =>
                openMaps(
                  place.coordinate.latitude,
                  place.coordinate.longitude,
                  place.name
                )
              }
            >
              <Text style={styles.webItemButtonText}>Abrir no Maps</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
}

export default function MapViewWrapper({
  places = [],
  region,
  onPlacePress,
  style,
  ...props
}) {
  if (Platform.OS === 'web') {
    return (
      <WebMap
        places={places}
        region={region}
        onPlacePress={onPlacePress}
        style={style}
      />
    );
  }

  if (!NativeMapView) {
    return (
      <View style={[styles.fallback, style]}>
        <Text style={styles.fallbackText}>Mapa indisponível</Text>
      </View>
    );
  }

  return (
    <NativeMapView
      style={[styles.nativeMap, style]}
      initialRegion={region}
      {...props}
    >
      {places.map((place) => (
        <NativeMarker
          key={place.id}
          coordinate={place.coordinate}
          title={place.name}
          description={place.category}
          onCalloutPress={() => onPlacePress?.(place)}
        >
          {NativeCallout ? (
            <NativeCallout>
              <View style={styles.callout}>
                <Text style={styles.calloutTitle}>{place.name}</Text>
                <Text style={styles.calloutCategory}>{place.category}</Text>
              </View>
            </NativeCallout>
          ) : null}
        </NativeMarker>
      ))}
    </NativeMapView>
  );
}

const styles = StyleSheet.create({
  nativeMap: {
    flex: 1
  },

  webContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden'
  },

  webHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0ece6'
  },

  webTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a6b4a'
  },

  webItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f5f2'
  },

  webItemDot: {
    marginRight: 12
  },

  webItemContent: {
    flex: 1
  },

  webItemName: {
    color: '#1a1a1a',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 2
  },

  webItemCategory: {
    color: '#1a6b4a',
    fontSize: 12,
    fontWeight: '600'
  },

  webItemButton: {
    backgroundColor: '#1a6b4a',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6
  },

  webItemButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600'
  },

  webEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },

  webEmptyText: {
    color: '#666666',
    fontSize: 15,
    textAlign: 'center'
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
  },

  fallback: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8f5ee',
    borderRadius: 16
  },

  fallbackText: {
    color: '#1a6b4a',
    fontSize: 16,
    fontWeight: '600'
  }
});
