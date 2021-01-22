import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Avatar, Colors, List } from 'react-native-paper';

const CollaboratorsRoute = () => {
  return (
    <>
      <List.Item
        title="First Person"
        description="information"
        left={(props) => <List.Icon {...props} color={Colors.cyan400} icon="account" />}
      />
      <List.Item
        title="Second Person"
        description="information"
        left={(props) => <List.Icon {...props} color={Colors.cyan400} icon="account" />}
      />
      <List.Item
        title="Third Person"
        description="information"
        left={(props) => <List.Icon {...props} color={Colors.cyan400} icon="account" />}
      />
    </>
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

export default CollaboratorsRoute;
