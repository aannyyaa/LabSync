import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {
  Appbar,
  Avatar,
  BottomNavigation,
  Colors,
  IconButton,
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
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  top: {
    left: 0,
    right: 0,
  },
  accountsContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  accounts: {
    flex: 1,
    flexDirection: 'row',
  },
});
