import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import { withNavigation } from '@react-navigation/compat';

const AllCollaborators = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('collaborator', {
            id: item.id,
            first: item.first,
            last: item.last,
            position: item.position,
            tasks: item.tasks
          });
        }}
      >
        <Text>{`${item.first} ${item.last}`}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={collaborators}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  collabContainer: {
    fontSize: 18,
    margin: '2%',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    fontSize: 18,
    margin: '2%',
  },
  title: {
    fontSize: 32,
  },
});

export default withNavigation(AllCollaborators);
