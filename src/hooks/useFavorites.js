import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@ConhecaGaranhuns:favorites';

export default function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((data) => {
        if (data) {
          setFavoriteIds(JSON.parse(data));
        }
      })
      .catch((error) => {
        console.error('Erro ao carregar os favoritos:', error);
      });
  }, []);

  const persist = useCallback((ids) => {
    setFavoriteIds(ids);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(ids)).catch((error) => {
      console.error('Erro ao salvar os favoritos:', error);
    });
  }, []);

  const toggleFavorite = useCallback(
    (id) => {
      const updated = favoriteIds.includes(id)
        ? favoriteIds.filter((fid) => fid !== id)
        : [...favoriteIds, id];
      persist(updated);
    },
    [favoriteIds, persist]
  );

  const isFavorite = useCallback(
    (id) => favoriteIds.includes(id),
    [favoriteIds]
  );

  const clearFavorites = useCallback(() => {
    persist([]);
  }, [persist]);

  return { favoriteIds, toggleFavorite, isFavorite, clearFavorites };
}
