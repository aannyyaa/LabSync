import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Appbar } from 'react-native-paper';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.top}>
        <Appbar.Content title="LabSync" />
      </Appbar.Header>
      <BottomNav />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top: {
    left: 0,
    right: 0,
  },
});
