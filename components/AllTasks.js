import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Button,
  Checkbox,
  Colors,
  List,
  RadioButton,
} from 'react-native-paper';
import collaborators from '../db/collaborators';
import tasks from '../db/tasks';

const AllTasks = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('single task', {
            id: item.id,
            title: item.title,
            startDate: item.startDate,
            deadline: item.deadline,
            creator: item.creator,
            collaborators: item.collaborators,
          });
        }}
      >
        <List.Item
          title={item.title}
          description={`Deadline: ${item.deadline}`}
          left={(props) => (
            <List.Icon {...props} color={Colors.cyan400} icon="check" />
          )}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.background}>
      <SafeAreaView >
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
        <Button
          icon="flask-plus"
          mode="contained"
          color={Colors.cyan400}
          style={styles.button}
          onPress={() => navigation.navigate('new task')}
        >
          Add
        </Button>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    width: '33%',
    margin: '5%',
    marginLeft: '33%',
  },
  background: {
    backgroundColor: '#fff',
    height: "100%"
  },
});

export default AllTasks;
