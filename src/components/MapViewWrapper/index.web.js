import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function openMaps(lat, lng) {
  Linking.openURL(
    `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
  );
}

export default function MapViewWrapper({ places = [], onPlacePress, style }) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <Text style={styles.title}>🗺️ Locais no mapa</Text>
      </View>

      {places.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>
            Nenhum local corresponde à pesquisa
          </Text>
        </View>
      ) : (
        places.map((place) => (
          <TouchableOpacity
            key={place.id}
            style={styles.item}
            onPress={() => onPlacePress?.(place)}
          >
            <View style={styles.itemDot}>
              <Text>📍</Text>
            </View>

            <View style={styles.itemContent}>
              <Text style={styles.itemName}>{place.name}</Text>
              <Text style={styles.itemCategory}>{place.category}</Text>
            </View>

            <TouchableOpacity
              style={styles.itemButton}
              onPress={() =>
                openMaps(
                  place.coordinate.latitude,
                  place.coordinate.longitude
                )
              }
            >
              <Text style={styles.itemButtonText}>Abrir no Maps</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden'
  },

  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0ece6'
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a6b4a'
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f5f2'
  },

  itemDot: {
    marginRight: 12
  },

  itemContent: {
    flex: 1
  },

  itemName: {
    color: '#1a1a1a',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 2
  },

  itemCategory: {
    color: '#1a6b4a',
    fontSize: 12,
    fontWeight: '600'
  },

  itemButton: {
    backgroundColor: '#1a6b4a',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6
  },

  itemButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600'
  },

  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },

  emptyText: {
    color: '#666666',
    fontSize: 15,
    textAlign: 'center'
  }
});
