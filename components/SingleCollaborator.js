import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Colors } from 'react-native-paper';
import collaborators from '../db/collaborators';

const SingleCollaborator = (props) => {
  const collaborator = collaborators[0];

  return (
    <View style={styles.container}>
      <Avatar.Icon size={100} backgroundColor={Colors.cyan400} icon="account" />
      <Text
        style={styles.title}
      >{`${collaborator.first} ${collaborator.last}`}</Text>
      <Text style={styles.instructions}>{`${collaborator.position}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    margin: '2%',
  },
  instructions: {
    color: '#888',
    fontSize: 15,
    margin: '2%',
  },
});

export default SingleCollaborator;
