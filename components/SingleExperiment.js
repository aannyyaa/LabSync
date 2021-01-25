import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import experiments from '../db/experiments'

const SingleViewData = () => {
  const experiment = experiments[0]
  return (
    <DataTable>
  <DataTable.Header>
    <DataTable.Title>{experiment.sampleHeader}</DataTable.Title>
    <DataTable.Title numeric>{experiment.resultsHeader}</DataTable.Title>
  </DataTable.Header>
  <DataTable.Row>
  <DataTable.Cell>{experiment.samples[0]}</DataTable.Cell>
    <DataTable.Cell numeric>{experiment.results[0]}</DataTable.Cell>
  </DataTable.Row>
  <DataTable.Row>
    <DataTable.Cell>{experiment.samples[1]}</DataTable.Cell>
    <DataTable.Cell numeric>{experiment.results[1]}</DataTable.Cell>
  </DataTable.Row>
  <DataTable.Row>
    <DataTable.Cell>{experiment.samples[2]}</DataTable.Cell>
    <DataTable.Cell numeric>{experiment.results[2]}</DataTable.Cell>
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
