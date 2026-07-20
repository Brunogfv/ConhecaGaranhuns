import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const FEATURES = [
  {
    icon: 'search',
    text: 'Pesquise por nome, categoria ou bairro'
  },
  {
    icon: 'map-outline',
    text: 'Veja os locais em lista ou no mapa'
  },
  {
    icon: 'heart-outline',
    text: 'Salve seus lugares favoritos'
  }
];

export default function WelcomeModal({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <Ionicons name="leaf" size={34} color="#1a6b4a" />
          </View>

          <Text style={styles.title}>Bem-vindo!</Text>

          <Text style={styles.subtitle}>
            Descubra os encantos turísticos, culturais e naturais de
            Garanhuns, a Suíça Pernambucana.
          </Text>

          <View style={styles.features}>
            {FEATURES.map((feature) => (
              <View key={feature.icon} style={styles.featureRow}>
                <View style={styles.featureIcon}>
                  <Ionicons name={feature.icon} size={18} color="#1a6b4a" />
                </View>
                <Text style={styles.featureText}>{feature.text}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Começar a explorar</Text>
            <Ionicons name="arrow-forward" size={18} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28
  },

  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 26,
    alignItems: 'center'
  },

  iconCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#e8f5ee',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },

  title: {
    color: '#1a6b4a',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8
  },

  subtitle: {
    color: '#4a5c52',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 22
  },

  features: {
    alignSelf: 'stretch',
    gap: 14,
    marginBottom: 26
  },

  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },

  featureIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#f0f7f3',
    alignItems: 'center',
    justifyContent: 'center'
  },

  featureText: {
    flex: 1,
    color: '#444444',
    fontSize: 15
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    alignSelf: 'stretch',
    backgroundColor: '#1a6b4a',
    borderRadius: 14,
    paddingVertical: 15
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
