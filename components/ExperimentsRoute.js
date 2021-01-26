import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SingleExperiment from './SingleExperiment';
import AllExperiments from './AllExperiments';
import AddNewExperiment from './AddNewExperiment';

const Stack = createStackNavigator();

const ExperimentsRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="my experiments">
        <Stack.Screen
          name="my experiments"
          component={AllExperiments}
          options={{
            headerStyle: { backgroundColor: '#3700B3' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="single experiment"
          component={SingleExperiment}
          options={{
            headerStyle: { backgroundColor: '#3700B3' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="new experiment"
          component={AddNewExperiment}
          options={{
            headerStyle: { backgroundColor: '#3700B3' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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

export default ExperimentsRoute;
