import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DataTable } from 'react-native-paper';

const AllData = ({ navigation }) => {
  let arr = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11,12,13,14,15,16,17,18,19,20, 21, 22,23,24,25,26,27,28,29,30];
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>experiment</DataTable.Title>
        <DataTable.Title numeric>date</DataTable.Title>
      </DataTable.Header>
      <ScrollView>
      {arr.map((item) => {
        return (
          <DataTable.Row key={item}>
            <DataTable.Cell
              onPress={() => navigation.navigate('single experiment')}
            >
              {`experiment ${item}`}
            </DataTable.Cell>
            <DataTable.Cell numeric>Jan 1, 2021</DataTable.Cell>
          </DataTable.Row>
        );
      })}
      </ScrollView>
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

export default AllData;
