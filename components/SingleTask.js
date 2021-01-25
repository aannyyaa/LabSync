import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Chip, RadioButton, Title } from 'react-native-paper';

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
    <View style={styles.background}>
      <Title style={styles.title}>{title}</Title>
      <Text style={styles.instructions}>{`Start date: ${startDate}`}</Text>
      <Text style={styles.instructions}>{`Deadline: ${deadline}`}</Text>
      <Text style={styles.instructions}>{`Collaborators:`}</Text>
      {allCollaborators.map((collaborator) => {
        return (
          <Chip
            style={styles.chip}
            key={collaborator}
            type="outlined"
            icon="account"
            onPress={() => console.log('Pressed')}
          >
            {collaborator}
          </Chip>
        );
      })}
      <RadioButton.Item
        label="Mark as complete"
        status={checked}
        onPress={ToggleChecked}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: 10,
  },
  instructions: {
    fontSize: 15,
    margin: 10,
  },
  chip: {
    width: '37%',
    margin: 10,
  },
  background: {
    backgroundColor: '#fff',
    height: '100%',
  },
});

export default SingleTask;
