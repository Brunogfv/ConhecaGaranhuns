import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function PlaceCard({ place, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed
      ]}
      onPress={onPress}
    >
      <Image
        source={{ uri: place.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>{place.category}</Text>
        </View>

        <Text style={styles.name}>{place.name}</Text>

        <Text style={styles.neighborhood}>
          📍 {place.neighborhood}
        </Text>

        <Text style={styles.summary} numberOfLines={3}>
          {place.summary}
        </Text>

        <View style={styles.admissionContainer}>
          <Text style={styles.admissionText}>
            🎟️ {place.admission}
          </Text>
        </View>

        <Text style={styles.detailsText}>
          Toque para ver os detalhes →
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.18,
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: '#e0ece6'
  },

  cardPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }]
  },

  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#d9d9d9'
  },

  content: {
    padding: 18
  },

  categoryContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#e8f5ee',
    borderRadius: 22,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginBottom: 12
  },

  category: {
    color: '#1a6b4a',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5
  },

  name: {
    color: '#1a1a1a',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6
  },

  neighborhood: {
    color: '#555555',
    fontSize: 14,
    marginBottom: 10
  },

  summary: {
    color: '#444444',
    fontSize: 15,
    lineHeight: 23
  },

  admissionContainer: {
    marginTop: 10,
    backgroundColor: '#f0f7f3',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignSelf: 'flex-start'
  },

  admissionText: {
    color: '#2d7a56',
    fontSize: 13,
    fontWeight: '600'
  },

  detailsText: {
    color: '#1a6b4a',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 14
  }
});
