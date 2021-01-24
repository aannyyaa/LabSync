import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';

const SingleViewData = () => {
  return (
    <DataTable>
  <DataTable.Header>
    <DataTable.Title>Sample</DataTable.Title>
    <DataTable.Title numeric>{`Length (bp)`}</DataTable.Title>
  </DataTable.Header>
  <DataTable.Row>
    <DataTable.Cell>A</DataTable.Cell>
    <DataTable.Cell numeric>1000</DataTable.Cell>
  </DataTable.Row>
  <DataTable.Row>
    <DataTable.Cell>B</DataTable.Cell>
    <DataTable.Cell numeric>500</DataTable.Cell>
  </DataTable.Row>
  <DataTable.Row>
    <DataTable.Cell>C</DataTable.Cell>
    <DataTable.Cell numeric>100</DataTable.Cell>
  </DataTable.Row>
  </DataTable>
  )
};

const styles = StyleSheet.create({
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  }
});

export default SingleViewData;
