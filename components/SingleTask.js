import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tasks from '../db/tasks';

const SingleTask = () => {
  const task = tasks[0];
  const creator = `${task.creator.first} ${task.creator.last}`;
  const collaborators = task.collaborators.map(
    (collaborator) => `${collaborator.first} ${collaborator.last}`
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text
        style={styles.instructions}
      >{`Start date: ${task.startDate.toDateString()}`}</Text>
      <Text
        style={styles.instructions}
      >{`Deadline: ${task.deadline.toDateString()}`}</Text>
      <Text style={styles.instructions}>{`Created by: ${creator}`}</Text>
      <Text style={styles.instructions}>{`Collaborators: ${collaborators.join(
        ', '
      )}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: '2%',
    marginTop: '2%',
  },
  instructions: {
    fontSize: 15,
    marginHorizontal: 15,
  },
});

export default SingleTask;
