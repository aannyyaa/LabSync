import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { DataTable } from 'react-native-paper';
import experiments from '../db/data';
import data from '../db/data';

const AllData = ({ navigation }) => {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Experiment</DataTable.Title>
        <DataTable.Title numeric>Date</DataTable.Title>
      </DataTable.Header>
      <ScrollView>
        {data.map((experiment) => {
          return (
            <DataTable.Row key={experiment.id}>
              <DataTable.Cell
                onPress={() => navigation.navigate('single experiment')}
              >
                {`Experiment ${experiment.id}`}
              </DataTable.Cell>
              <DataTable.Cell numeric>
                {experiment.startDate.toLocaleDateString()}
              </DataTable.Cell>
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
