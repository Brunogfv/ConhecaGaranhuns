import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@ConhecaGaranhuns:welcomeSeen';

/*
 * Controla a exibição do modal de boas-vindas.
 * O modal aparece apenas na primeira vez que o usuário abre o
 * aplicativo. A informação fica salva no AsyncStorage, de modo
 * que nas próximas aberturas ele não é mostrado novamente.
 */
export default function useFirstLaunch() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((data) => {
        if (!data) {
          setShowWelcome(true);
        }
      })
      .catch((error) => {
        console.error('Erro ao verificar a primeira abertura:', error);
      });
  }, []);

  const dismissWelcome = useCallback(() => {
    setShowWelcome(false);
    AsyncStorage.setItem(STORAGE_KEY, 'true').catch((error) => {
      console.error('Erro ao salvar a primeira abertura:', error);
    });
  }, []);

  return { showWelcome, dismissWelcome };
}
