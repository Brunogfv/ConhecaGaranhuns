import React from 'react';
import { Share } from 'react-native';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import MapViewWrapper from '../../components/MapViewWrapper';
import useFavorites from '../../hooks/useFavorites';

export default function Details({ route }) {
  const { place } = route.params;
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(place.id);

  async function handleShare() {
    try {
      await Share.share({
        message: `Conheça ${place.name} em Garanhuns!\n\n${place.summary}\n\n📍 ${place.address}\n🎟️ ${place.admission}\n\n📍 Abrir no mapa: https://www.google.com/maps/search/?api=1&query=${place.coordinate.latitude},${place.coordinate.longitude}`,
        title: place.name
      });
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={{ uri: place.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.imageActions}>
        <TouchableOpacity
          style={styles.imageActionButton}
          onPress={() => toggleFavorite(place.id)}
        >
          <Text style={styles.imageActionIcon}>
            {fav ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageActionButton}
          onPress={handleShare}
        >
          <Text style={styles.imageActionIcon}>📤</Text>
        </TouchableOpacity>
      </View>

      {place.coordinate && (
        <MapViewWrapper
          places={[place]}
          region={{
            latitude: place.coordinate.latitude,
            longitude: place.coordinate.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}
          scrollEnabled={false}
          zoomEnabled={false}
          style={styles.map}
        />
      )}

      <View style={styles.content}>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>
            {place.category}
          </Text>
        </View>

        <Text style={styles.name}>
          {place.name}
        </Text>

        <Text style={styles.neighborhood}>
          📍 Bairro: {place.neighborhood}
        </Text>

        <View style={styles.informationBox}>
          <Text style={styles.informationTitle}>
            📌 Endereço
          </Text>

          <Text style={styles.informationText}>
            {place.address}
          </Text>
        </View>

        <View style={styles.informationBox}>
          <Text style={styles.informationTitle}>
            🕐 Horário de funcionamento
          </Text>

          <Text style={styles.informationText}>
            {place.openingHours}
          </Text>
        </View>

        <View style={styles.informationBox}>
          <Text style={styles.informationTitle}>
            🎟️ Entrada
          </Text>

          <Text style={styles.informationText}>
            {place.admission}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>
          Sobre o local
        </Text>

        <Text style={styles.description}>
          {place.description}
        </Text>

        <View style={styles.warningBox}>
          <Text style={styles.warningTitle}>
            ⚠️ Observação
          </Text>

          <Text style={styles.warningText}>
            As informações apresentadas possuem finalidade
            educacional. Horários e condições de visitação
            devem ser confirmados antes da visita.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f5f2'
  },

  contentContainer: {
    paddingBottom: 34
  },

  image: {
    width: '100%',
    height: 270,
    backgroundColor: '#d9d9d9'
  },

  imageActions: {
    flexDirection: 'row',
    position: 'absolute',
    top: 12,
    right: 12,
    gap: 8
  },

  imageActionButton: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 22,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },

  imageActionIcon: {
    fontSize: 20
  },

  map: {
    width: '100%',
    height: 180,
    backgroundColor: '#d9d9d9'
  },

  content: {
    padding: 20
  },

  categoryContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#e8f5ee',
    borderRadius: 22,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginBottom: 14
  },

  category: {
    color: '#1a6b4a',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5
  },

  name: {
    color: '#1a1a1a',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8
  },

  neighborhood: {
    color: '#555555',
    fontSize: 15,
    marginBottom: 22
  },

  informationBox: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0ece6'
  },

  informationTitle: {
    color: '#1a6b4a',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 6
  },

  informationText: {
    color: '#444444',
    fontSize: 15,
    lineHeight: 23
  },

  sectionTitle: {
    color: '#1a1a1a',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 14,
    marginBottom: 10
  },

  description: {
    color: '#444444',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'justify'
  },

  warningBox: {
    backgroundColor: '#fff4cf',
    borderRadius: 14,
    marginTop: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: '#f0e0a0'
  },

  warningTitle: {
    color: '#755b00',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 6
  },

  warningText: {
    color: '#5d4b0c',
    fontSize: 14,
    lineHeight: 22
  }
});
