import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { DataTable } from 'react-native-paper';

const DataRoute = () => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>experiment</DataTable.Title>
        <DataTable.Title numeric>results</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>experiment 1</DataTable.Cell>
        <DataTable.Cell numeric>
          {Math.floor(Math.random() * 100)}
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>experiment 2</DataTable.Cell>
        <DataTable.Cell numeric>
          {Math.floor(Math.random() * 100)}
        </DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>experiment 3</DataTable.Cell>
        <DataTable.Cell numeric>
          {Math.floor(Math.random() * 100)}
        </DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

const styles = StyleSheet.create({
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
});

export default DataRoute;
