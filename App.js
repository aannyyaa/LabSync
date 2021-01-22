import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {
  Appbar,
} from 'react-native-paper';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.top}>
        <Appbar.BackAction onPress={() => console.log('Went back')} />
        <Appbar.Content />
        <Appbar.Action
          icon="magnify"
          onPress={() => console.log('Searching')}
        />
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => console.log('Shown more')}
        />
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
