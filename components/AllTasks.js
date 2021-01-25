import React, { useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Checkbox, Colors, List, RadioButton } from 'react-native-paper';
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
          left={(props) => (
            <List.Icon {...props} color={Colors.cyan400} icon="check" />
          )}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
    // <View>
    //   <ScrollView>
    //   {tasks.map((task) => {
    //     return (
    //       <Checkbox.Item
    //         key={task.id}
    //         label={task.title}
    //         status="checked"
    //         onPress={() => navigation.navigate('single task')}
    //       />
    //     );
    //   })}
    //   </ScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
});

export default AllTasks;
