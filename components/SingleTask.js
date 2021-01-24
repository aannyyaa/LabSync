import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import tasks from '../db/tasks';

const SingleTask = () => {
  const task = tasks[0];
  const creator = `${task.creator.first} ${task.creator.last}`;
  const collaborators = task.collaborators.map(
    (collaborator) => `${collaborator.first} ${collaborator.last}`
  );
  const [checked, setChecked] = React.useState('unchecked');

  const ToggleChecked = () =>
    setChecked(checked === 'checked' ? 'unchecked' : 'checked');
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{task.title}</Text>
      <Text
        style={styles.instructions}
      >{`Start date: ${task.startDate.toLocaleDateString()}`}</Text>
      <Text
        style={styles.instructions}
      >{`Deadline: ${task.deadline.toLocaleDateString()}`}</Text>
      <Text style={styles.instructions}>{`Created by: ${creator}`}</Text>
      <Text style={styles.instructions}>{`Collaborators: ${collaborators.join(
        ', '
      )}`}</Text>
      <RadioButton.Item label='Mark as complete' status={checked} onPress={ToggleChecked} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    margin: '2%',
  },
  instructions: {
    fontSize: 15,
    margin: '2%',
  },
});

export default SingleTask;
