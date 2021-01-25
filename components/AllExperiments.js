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
import { Button, Colors, DataTable } from 'react-native-paper';
import experiments from '../db/experiments';

const AllData = ({ navigation }) => {
  return (
    <ScrollView style={styles.background}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Experiment</DataTable.Title>
          <DataTable.Title numeric>Date</DataTable.Title>
        </DataTable.Header>
        {experiments.map((experiment) => {
          return (
            <DataTable.Row key={experiment.id}>
              <DataTable.Cell
                onPress={() => navigation.navigate('single experiment')}
              >
                {`Experiment ${experiment.id}`}
              </DataTable.Cell>
              <DataTable.Cell numeric>{experiment.startDate}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
      <Button
        icon="folder-plus"
        mode="contained"
        color={Colors.cyan400}
        style={styles.button}
        onPress={() => console.log('new experiment')}
      >
        Add
      </Button>
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
  button: {
    width: '33%',
    margin: "5%",
    marginLeft: '33%'
  },
});

export default AllData;
