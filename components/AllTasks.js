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
import { Checkbox } from 'react-native-paper';

const TasksRoute = ({ navigation }) => {
  return (
    <View>
      <Checkbox.Item label="task 1" status="checked" onPress={() => navigation.navigate('single task')}/>
      <Checkbox.Item label="task 2" status="indeterminate" onPress={() => navigation.navigate('single task')}/>
      <Checkbox.Item label="task 3" status="indeterminate" onPress={() => navigation.navigate('single task')}/>
    </View>
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
