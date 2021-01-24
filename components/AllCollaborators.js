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
import SingleCollaborator from './SingleCollaborator';

const AllCollaborators = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    
    return (
      <SingleCollaborator
        first={item.first}
        last={item.last}
        onPress={() => {
          setSelectedId(item.id);
          navigation.navigate('collaborator');
        }}
        style={{ backgroundColor }}
      />
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
    // <>
    //   <TouchableOpacity></TouchableOpacity>
    //   <View style={styles.collabContainer}>
    //     <ScrollView>
    //       <List.Section>
    //         {collaborators.map((collaborator) => {
    //           return (
    //             <List.Item
    //               key={collaborator.id}
    //               title={`${collaborator.first} ${collaborator.last}`}
    //               description={`${collaborator.position}`}
    //               onPress={() => navigation.navigate('collaborator')}
    //               left={(props) => (
    //                 <List.Icon
    //                   {...props}
    //                   color={Colors.cyan400}
    //                   icon="account"
    //                 />
    //               )}
    //             />
    //           );
    //         })}
    //       </List.Section>
    //     </ScrollView>
    //   </View>
    // </>
  );
};

const styles = StyleSheet.create({
  collabContainer: {
    margin: '2%',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default AllCollaborators;
