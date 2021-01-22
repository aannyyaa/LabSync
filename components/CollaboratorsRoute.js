import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, List } from 'react-native-paper';

const CollaboratorsRoute = () => {
  return (
    <View style={styles.collabContainer}>
      <List.Section>
        <List.Item
          title="First Person"
          description="information"
          left={(props) => (
            <List.Icon {...props} color={Colors.cyan400} icon="account" />
          )}
        />
        <List.Item
          title="Second Person"
          description="information"
          left={(props) => (
            <List.Icon {...props} color={Colors.cyan400} icon="account" />
          )}
        />
        <List.Item
          title="Third Person"
          description="information"
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

export default CollaboratorsRoute;
