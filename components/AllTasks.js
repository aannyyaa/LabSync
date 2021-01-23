import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { Checkbox, RadioButton } from 'react-native-paper';
import tasks from '../db/tasks';

const AllTasks = ({ navigation }) => {
  // const [checked, setChecked] = React.useState('first');
  const [value, setValue] = React.useState('first');
  return (
    <View>
      {tasks.map((task, idx) => {
        return (
          <Checkbox.Item
            key={task.id}
            label={tasks[idx].title}
            status="checked"
            onPress={() => navigation.navigate('single task')}
          />
        );
      })}
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

export default AllTasks;
