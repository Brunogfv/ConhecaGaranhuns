import React, {
  useEffect,
  useMemo,
  useState
} from 'react';

import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import MapViewWrapper from '../../components/MapViewWrapper';
import PlaceCard from '../../components/PlaceCard';
import WelcomeModal from '../../components/WelcomeModal';
import placesData from '../../data/places';
import useFavorites from '../../hooks/useFavorites';
import useFirstLaunch from '../../hooks/useFirstLaunch';

export default function Home({ navigation }) {
  const [places, setPlaces] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { favoriteIds, isFavorite, toggleFavorite } = useFavorites();
  const { showWelcome, dismissWelcome } = useFirstLaunch();

  const categories = useMemo(() => {
    const unique = [...new Set(placesData.map((p) => p.category))];
    return unique.sort();
  }, []);

  function loadPlaces() {
    try {
      setIsLoading(true);
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
    const normalizedSearch = searchText.trim().toLowerCase();
    let result = places;

    if (selectedCategory) {
      result = result.filter((place) => place.category === selectedCategory);
    }

    if (showFavoritesOnly) {
      result = result.filter((place) => favoriteIds.includes(place.id));
    }

    if (normalizedSearch !== '') {
      result = result.filter((place) => {
        const name = place.name.toLowerCase();
        const category = place.category.toLowerCase();
        const neighborhood = place.neighborhood.toLowerCase();
        return (
          name.includes(normalizedSearch) ||
          category.includes(normalizedSearch) ||
          neighborhood.includes(normalizedSearch)
        );
      });
    }

    return result;
  }, [places, searchText, selectedCategory, showFavoritesOnly, favoriteIds]);

  function openDetails(place) {
    navigation.navigate('Details', { place });
  }

  function renderPlace({ item }) {
    return (
      <PlaceCard
        place={item}
        onPress={() => openDetails(item)}
        isFavorite={isFavorite(item.id)}
        onToggleFavorite={toggleFavorite}
      />
    );
  }

  function renderListHeader() {
    return (
      <Text style={styles.resultCount}>
        {filteredPlaces.length}{' '}
        {filteredPlaces.length === 1 ? 'local encontrado' : 'locais encontrados'}
      </Text>
    );
  }

  function renderEmptyList() {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="search-outline" size={56} color="#aaaaaa" />
        <Text style={styles.emptyTitle}>Nenhum local encontrado</Text>
        <Text style={styles.emptyMessage}>
          Verifique o texto pesquisado e tente novamente.
        </Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1a6b4a" />
        <Text style={styles.loadingText}>Carregando locais...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WelcomeModal visible={showWelcome} onClose={dismissWelcome} />

      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={16} color="#888888" />
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
          {searchText.length > 0 && (
            <TouchableOpacity
              onPress={() => setSearchText('')}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Ionicons name="close-circle" size={18} color="#aaaaaa" />
            </TouchableOpacity>
          )}
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipsContent}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableOpacity
            style={[styles.chip, showFavoritesOnly && styles.chipFavoriteActive]}
            onPress={() => setShowFavoritesOnly((prev) => !prev)}
          >
            <Ionicons
              name={showFavoritesOnly ? 'heart' : 'heart-outline'}
              size={12}
              color={showFavoritesOnly ? '#ffffff' : '#4a5c52'}
            />
            <Text style={[styles.chipText, showFavoritesOnly && styles.chipTextActive]}>
              Favoritos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.chip, showMap && styles.chipActive]}
            onPress={() => setShowMap((prev) => !prev)}
          >
            <Ionicons
              name={showMap ? 'list-outline' : 'map-outline'}
              size={12}
              color={showMap ? '#ffffff' : '#4a5c52'}
            />
            <Text style={[styles.chipText, showMap && styles.chipTextActive]}>
              {showMap ? 'Lista' : 'Mapa'}
            </Text>
          </TouchableOpacity>

          <View style={styles.chipSeparator} />

          <TouchableOpacity
            style={[styles.chip, !selectedCategory && styles.chipActive]}
            onPress={() => setSelectedCategory(null)}
          >
            <Text style={[styles.chipText, !selectedCategory && styles.chipTextActive]}>
              Todos
            </Text>
          </TouchableOpacity>

          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[styles.chip, selectedCategory === category && styles.chipActive]}
              onPress={() =>
                setSelectedCategory(selectedCategory === category ? null : category)
              }
            >
              <Text style={[styles.chipText, selectedCategory === category && styles.chipTextActive]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {showMap ? (
        <MapViewWrapper
          places={filteredPlaces}
          region={{
            latitude: -8.884,
            longitude: -36.497,
            latitudeDelta: 0.03,
            longitudeDelta: 0.055
          }}
          onPlacePress={(place) => navigation.navigate('Details', { place })}
          style={styles.map}
        />
      ) : (
        <FlatList
          data={filteredPlaces}
          renderItem={renderPlace}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={renderListHeader}
          ListEmptyComponent={renderEmptyList}
          contentContainerStyle={
            filteredPlaces.length === 0 ? styles.emptyList : styles.list
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
    backgroundColor: '#f0f5f2'
  },

  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0ece6'
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f5f2',
    borderRadius: 12,
    paddingHorizontal: 12,
    gap: 8,
    marginBottom: 10
  },

  input: {
    flex: 1,
    color: '#222222',
    fontSize: 15,
    paddingVertical: 10
  },

  chipsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingRight: 4
  },

  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#f0f5f2',
    borderWidth: 1,
    borderColor: '#c8ddd4',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 5
  },

  chipActive: {
    backgroundColor: '#1a6b4a',
    borderColor: '#1a6b4a'
  },

  chipFavoriteActive: {
    backgroundColor: '#c0392b',
    borderColor: '#c0392b'
  },

  chipText: {
    color: '#4a5c52',
    fontSize: 12,
    fontWeight: '600'
  },

  chipTextActive: {
    color: '#ffffff'
  },

  chipSeparator: {
    width: 1,
    height: 18,
    backgroundColor: '#c8ddd4',
    marginHorizontal: 2
  },

  resultCount: {
    color: '#5a6e63',
    fontSize: 13,
    fontWeight: '500',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 6
  },

  map: {
    flex: 1,
    margin: 12,
    borderRadius: 16,
    overflow: 'hidden'
  },

  list: {
    paddingHorizontal: 16,
    paddingBottom: 24
  },

  emptyList: {
    flexGrow: 1,
    paddingHorizontal: 16
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
    paddingHorizontal: 30,
    paddingTop: 60,
    gap: 12
  },

  emptyTitle: {
    color: '#333333',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  emptyMessage: {
    color: '#666666',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center'
  }
});
