import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Checkbox } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SingleTask from './SingleTask';
import AllTasks from './AllTasks';

const Stack = createStackNavigator();

const TasksRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="allTasks">
        <Stack.Screen name="allTasks" component={AllTasks} options={{headerStyle: {backgroundColor: '#6200EE'}, headerTintColor: '#fff'}} />
        <Stack.Screen name="singleTask" component={SingleTask} options={{headerStyle: {backgroundColor: '#6200EE'}, headerTintColor: '#fff'}}/>
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
});

export default TasksRoute;
