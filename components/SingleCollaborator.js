import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, Colors, Title } from 'react-native-paper';
import collaborators from '../db/collaborators';

const SingleCollaborator = ({ route }) => {
  const { id, first, last, position } = route.params;
  console.log(route);
  return (
    <TouchableOpacity style={styles.container}>
      <Avatar.Icon size={100} backgroundColor={Colors.cyan400} icon="account" />
      <Title style={styles.title}>{`${first} ${last}`}</Title>
      <Text style={styles.position}>{position}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    margin: 10,
    marginTop: 30,
  },
  position: {
    color: '#888',
    fontSize: 15,
    margin: 10,
  },
});

export default SingleCollaborator;
