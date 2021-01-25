import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Colors, TextInput } from 'react-native-paper';

const AddNewTask = () => {
  const [title, setTitle] = React.useState('');
  const [deadline, setDeadline] = React.useState('');
  const [collaborators, setCollaborators] = React.useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        label="Task Title"
        value={title}
        onChangeText={(title) => setTitle(title)}
      />
      <TextInput
        style={styles.input}
        label="Deadline"
        value={deadline}
        onChangeText={(deadline) => setDeadline(deadline)}
      />
      <TextInput
        style={styles.input}
        label="Collaborators"
        value={collaborators}
        onChangeText={(collaborators) => setCollaborators(collaborators)}
      />
      <Button
        icon="flask-plus"
        mode="contained"
        color={Colors.cyan400}
        style={styles.button}
        onPress={() => console.log('SUBMIT')}
      >
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '33%',
    margin: '5%',
    marginLeft: '33%',
  },
  input: {
    margin: 20,
  },
});

export default AddNewTask;
