import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, List } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SingleCollaborator from './SingleCollaborator';
import AllCollaborators from './AllCollaborators';

const Stack = createStackNavigator();

const CollaboratorsRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="all">
        <Stack.Screen
          name="all"
          component={AllCollaborators}
          options={{
            headerStyle: { backgroundColor: '#3700B3' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="collaborator"
          component={SingleCollaborator}
          options={{
            headerStyle: { backgroundColor: '#3700B3' },
            headerTintColor: '#fff',
          }}
          // initialParams={{ id: 1 }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  collabContainer: {
    margin: '2%',
  },
});

export default CollaboratorsRoute;
