import * as React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Card, DataTable, Title } from 'react-native-paper';
import experiments from '../db/experiments';
import images from '../db/images';

const SingleViewData = () => {
  const renderItem = ({ item }) => {
    return (
      <Card style={styles.card}>
        <Card.Content>
          <Title>{item.title}</Title>
        </Card.Content>
        <Card.Cover source={{ uri: item.uri }} />
      </Card>
    );
  };
  const experiment = experiments[0];
  return (
    <ScrollView style={styles.background}>
      <Title>{experiment.title}</Title>
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
      <Title>Images</Title>
      <FlatList
        horizontal
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  card: {
    minWidth: 300,
    margin: 10,
    marginBottom: 25,
  },
});

export default SingleViewData;
