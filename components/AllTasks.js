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
import { Checkbox, RadioButton } from 'react-native-paper';

const TasksRoute = ({ navigation }) => {
  // const [checked, setChecked] = React.useState('first');
  const [value, setValue] = React.useState('first');
  return (
    <View>
      <Checkbox.Item
        label="task 1"
        status="checked"
        onPress={() => navigation.navigate('single task')}
      />
      <Checkbox.Item
        label="task 2"
        status="indeterminate"
        onPress={() => navigation.navigate('single task')}
      />
      <Checkbox.Item
        label="task 3"
        status="indeterminate"
        onPress={() => navigation.navigate('single task')}
      />
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
