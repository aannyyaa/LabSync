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
        label="Task Title"
        value={title}
        onChangeText={(title) => setTitle(title)}
      />
      <TextInput
        label="Deadline"
        value={deadline}
        onChangeText={(deadline) => setDeadline(deadline)}
      />
      <TextInput
        label="Collaborators"
        value={collaborators}
        onChangeText={(collaborators) => setCollaborators(collaborators)}
      />
      <Button icon="flask-plus" mode="contained" color={Colors.cyan400} style={styles.button} onPress={()=>console.log("SUBMIT")}>Submit</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: '2%',
    flex: 1,
    justifyContent: "space-evenly"
  },
  button: {
    width: '30%',
  },
});

export default AddNewTask;
