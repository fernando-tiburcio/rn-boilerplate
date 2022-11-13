import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});