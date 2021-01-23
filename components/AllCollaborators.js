import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { Colors, List } from 'react-native-paper';

const AllCollaborators = ({ navigation }) => {
  return (
    <View style={styles.collabContainer}>
      <List.Section>
        <List.Item
          title="First Person"
          description="information"
          onPress={() => navigation.navigate('collaborator')}
          left={(props) => (
            <List.Icon {...props} color={Colors.cyan400} icon="account" />
          )}
        />
        <List.Item
          title="Second Person"
          description="information"
          onPress={() => navigation.navigate('collaborator')}
          left={(props) => (
            <List.Icon {...props} color={Colors.cyan400} icon="account" />
          )}
        />
        <List.Item
          title="Third Person"
          description="information"
          onPress={() => navigation.navigate('collaborator')}
          left={(props) => (
            <List.Icon {...props} color={Colors.cyan400} icon="account" />
          )}
        />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  collabContainer: {
    margin: '2%',
  },
});

export default AllCollaborators;
