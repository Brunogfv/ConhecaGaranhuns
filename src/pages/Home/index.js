import React, {
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

import PlaceCard from '../../components/PlaceCard';
import placesData from '../../data/places';

export default function Home({ navigation }) {
  const [places, setPlaces] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showMap, setShowMap] = useState(false);

  function loadPlaces() {
    try {
      setIsLoading(true);

      /*
       * O setTimeout simula o tempo necessário para carregar
       * informações de uma API ou de um banco de dados.
       */
      setTimeout(() => {
        setPlaces(placesData);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Erro ao carregar os locais:', error);

      setPlaces([]);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadPlaces();
  }, []);

  const filteredPlaces = useMemo(() => {
    const normalizedSearch = searchText
      .trim()
      .toLowerCase();

    if (normalizedSearch === '') {
      return places;
    }

    return places.filter((place) => {
      const name = place.name.toLowerCase();
      const category = place.category.toLowerCase();
      const neighborhood = place.neighborhood.toLowerCase();

      return (
        name.includes(normalizedSearch) ||
        category.includes(normalizedSearch) ||
        neighborhood.includes(normalizedSearch)
      );
    });
  }, [places, searchText]);

  function openDetails(place) {
    navigation.navigate('Details', {
      place: place
    });
  }

  function renderPlace({ item }) {
    return (
      <PlaceCard
        place={item}
        onPress={() => openDetails(item)}
      />
    );
  }

  function renderEmptyList() {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyIcon}>🔍</Text>

        <Text style={styles.emptyTitle}>
          Nenhum local encontrado
        </Text>

        <Text style={styles.emptyMessage}>
          Verifique o texto pesquisado e tente novamente.
        </Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color="#1a6b4a"
        />

        <Text style={styles.loadingText}>
          Carregando locais...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.introduction}>
        <Text style={styles.title}>
          Explore Garanhuns 🌿
        </Text>

        <Text style={styles.subtitle}>
          Descubra os encantos turísticos, culturais e
          naturais da Suíça Pernambucana.
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔎</Text>
        <TextInput
          style={styles.input}
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Pesquisar por nome, categoria ou bairro"
          placeholderTextColor="#888888"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
        />
      </View>

      <View style={styles.resultRow}>
        <Text style={styles.resultText}>
          {filteredPlaces.length}{' '}
          {filteredPlaces.length === 1
            ? 'local encontrado'
            : 'locais encontrados'}
        </Text>

        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setShowMap((prev) => !prev)}
        >
          <Text style={styles.toggleButtonText}>
            {showMap ? '📋 Lista' : '🗺️ Mapa'}
          </Text>
        </TouchableOpacity>
      </View>

      {showMap ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -8.885,
            longitude: -36.492,
            latitudeDelta: 0.04,
            longitudeDelta: 0.04
          }}
        >
          {filteredPlaces.map((place) => (
            <Marker
              key={place.id}
              coordinate={place.coordinate}
              title={place.name}
              description={place.category}
              onCalloutPress={() => navigation.navigate('Details', { place })}
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
      ) : (
        <FlatList
          data={filteredPlaces}
          renderItem={renderPlace}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={renderEmptyList}
          contentContainerStyle={
            filteredPlaces.length === 0
              ? styles.emptyList
              : styles.list
          }
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f5f2',
    paddingHorizontal: 16
  },

  introduction: {
    paddingTop: 22,
    paddingBottom: 18
  },

  title: {
    color: '#1a6b4a',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8
  },

  subtitle: {
    color: '#4a5c52',
    fontSize: 16,
    lineHeight: 23
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#b8d4c6',
    borderWidth: 1.5,
    borderRadius: 14,
    paddingHorizontal: 14
  },

  searchIcon: {
    fontSize: 16,
    marginRight: 8
  },

  input: {
    flex: 1,
    color: '#222222',
    fontSize: 15,
    paddingVertical: 14
  },

  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12
  },

  resultText: {
    color: '#5a6e63',
    fontSize: 13,
    fontWeight: '500'
  },

  toggleButton: {
    backgroundColor: '#1a6b4a',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6
  },

  toggleButtonText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600'
  },

  map: {
    flex: 1,
    borderRadius: 16,
    marginBottom: 12,
    overflow: 'hidden'
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

  list: {
    paddingBottom: 24
  },

  emptyList: {
    flexGrow: 1
  },

  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f5f2'
  },

  loadingText: {
    color: '#1a6b4a',
    fontSize: 16,
    marginTop: 14,
    fontWeight: '500'
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },

  emptyIcon: {
    fontSize: 48,
    marginBottom: 16
  },

  emptyTitle: {
    color: '#333333',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center'
  },

  emptyMessage: {
    color: '#666666',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center'
  }
});
