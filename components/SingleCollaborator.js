import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, Colors } from 'react-native-paper';
import collaborators from '../db/collaborators';

const SingleCollaborator = ({
  first,
  last,
  onPress,
  style,
  route,
  navigation,
}) => {
  // const id = navigation.getParam('id')
  // const { id, first, last } = route.params;
  // const { id } = route.params;
  console.log(route);
  return (
    <TouchableOpacity onPress={onPress} style={[styles.instructions, style]}>
      {/* <Avatar.Icon size={100} backgroundColor={Colors.cyan400} icon="account" /> */}
      <Text>{`${first} ${last}`}</Text>
    </TouchableOpacity>
  );
};

{
  /* <Avatar.Icon size={100} backgroundColor={Colors.cyan400} icon="account" />
      <Text
        style={styles.title}
      >{`${collaborator.first} ${collaborator.last}`}</Text>
      <Text style={styles.instructions}>{`${collaborator.position}`}</Text> */
}

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
