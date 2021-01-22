import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Checkbox } from 'react-native-paper';

const TasksRoute = () => {
  // let toggleCheck = () => USE STATE to toggle check
  return (
    <View>
      <Checkbox.Item label="task 1" status="checked" />
      <Checkbox.Item label="task 2" status="indeterminate" />
      <Checkbox.Item label="task 3" status="indeterminate" />
    </View>
  );
};

const styles = StyleSheet.create({
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  }
});

export default TasksRoute;
