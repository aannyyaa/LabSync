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
        <DataTable.Title numeric>date</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>experiment 1</DataTable.Cell>
        <DataTable.Cell numeric>Jan 18, 2021</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>experiment 2</DataTable.Cell>
        <DataTable.Cell numeric> Jan 1, 2021</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>experiment 4</DataTable.Cell>
        <DataTable.Cell numeric>Dec 15, 2020</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>experiment 5</DataTable.Cell>
        <DataTable.Cell numeric>Dec 15, 2020</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>experiment 6</DataTable.Cell>
        <DataTable.Cell numeric> Dec 15, 2020</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>experiment 7</DataTable.Cell>
        <DataTable.Cell numeric>Dec 15, 2020</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>experiment 8</DataTable.Cell>
        <DataTable.Cell numeric>Dec 15, 2020</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>experiment 9</DataTable.Cell>
        <DataTable.Cell numeric>Dec 15, 2020</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>experiment 10</DataTable.Cell>
        <DataTable.Cell numeric>Dec 15, 2020</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Pagination
        page={1}
        numberOfPages={10}
        onPageChange={page => console.log(page)}
        label="1-10 of 100"
      />
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
