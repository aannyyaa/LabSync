import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import experiments from '../db/experiments';

const SingleViewData = () => {
  const experiment = experiments[0];
  return (
    <ScrollView>
      <Text>{experiment.title}</Text>
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
      <Text>Images:</Text>
      <Image source={{ uri: experiment.images[0] }} style={styles.image} />
      <Image source={{ uri: experiment.images[1] }} style={styles.image} />
      <Image source={{ uri: experiment.images[2] }} style={styles.image} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  image: {
    width: 400,
    height: 250,
    margin: '3%',
  },
});

export default SingleViewData;
