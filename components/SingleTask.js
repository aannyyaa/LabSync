import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import tasks from '../db/tasks';

const SingleTask = ({ route }) => {
  const {
    id,
    title,
    startDate,
    deadline,
    creator,
    collaborators,
  } = route.params;
  // console.log(route);

  const allCollaborators = collaborators.map(
    (collaborator) => `${collaborator.first} ${collaborator.last}`
  );
  const allCollaboratorsStr = allCollaborators.join(', ');
  // console.log(allCollaboratorsStr);

  const [checked, setChecked] = React.useState('unchecked');

  const ToggleChecked = () =>
    setChecked(checked === 'checked' ? 'unchecked' : 'checked');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.instructions}>{`Start date: ${startDate}`}</Text>
      <Text style={styles.instructions}>{`Deadline: ${deadline}`}</Text>
      <Text
        style={styles.instructions}
      >{`Created by: ${creator.first} ${creator.last}`}</Text>
      <Text style={styles.instructions}>{`Collaborators: ${allCollaboratorsStr}`}</Text>
      <RadioButton.Item
        label="Mark as complete"
        status={checked}
        onPress={ToggleChecked}
      />
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
