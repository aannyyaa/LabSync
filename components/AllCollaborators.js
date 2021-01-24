import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  Avatar,
  Button,
  Colors,
  List,
  Modal,
  Portal,
  Provider,
} from 'react-native-paper';
import collaborators from '../db/collaborators';

const AllCollaborators = ({ navigation }) => {
  return (
    <View style={styles.collabContainer}>
      <ScrollView>
        <List.Section>
          {collaborators.map((collaborator) => {
            return (
                <List.Item
                  key={collaborator.id}
                  title={`${collaborator.first} ${collaborator.last}`}
                  description={`${collaborator.position}`}
                  onPress={() => navigation.navigate('collaborator')}
                  left={(props) => (
                    <List.Icon
                      {...props}
                      color={Colors.cyan400}
                      icon="account"
                    />
                  )}
                />
            );
          })}
        </List.Section>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  collabContainer: {
    margin: '2%',
  },
});

export default AllCollaborators;
