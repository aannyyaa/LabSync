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
import TasksRoute from './TasksRoute'
import ImagesRoute from './ImagesRoute'
import CollaboratorsRoute from './CollaboratorsRoute'
import ExperimentsRoute from './ExperimentsRoute'

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'tasks', title: 'tasks', icon: 'flask' },
    { key: 'experiments', title: 'experiments', icon: 'folder' },
    { key: 'images', title: 'images', icon: 'image' },
    { key: 'collaborators', title: 'collaborators', icon: 'account-multiple' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    tasks: TasksRoute,
    experiments: ExperimentsRoute,
    images: ImagesRoute,
    collaborators: CollaboratorsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

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

export default BottomNav;
