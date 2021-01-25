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
          });
        }}
      >
        <List.Item
        title={`${item.first} ${item.last}`}
        description={item.position}
        left={props => <List.Icon {...props} color={Colors.cyan400} icon="account" />}
        />
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
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 15,
    margin: '2%',
  },

});

export default AllCollaborators;
