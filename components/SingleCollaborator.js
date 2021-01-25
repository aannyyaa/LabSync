import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, Colors } from 'react-native-paper';
import collaborators from '../db/collaborators';

const SingleCollaborator = ({ route }) => {
  const { id, first, last, position, tasks } = route.params;
  console.log(route);
  // setCollab()
  return (
    <TouchableOpacity style={styles.container}>
      <Avatar.Icon size={100} backgroundColor={Colors.cyan400} icon="account" />
      <Text style={styles.title}>{`${first} ${last}`}</Text>
      <Text style={styles.position}>{position}</Text>
    </TouchableOpacity>
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
  position: {
    color: '#888',
    fontSize: 15,
    margin: '2%',
  },
});

export default SingleCollaborator;
