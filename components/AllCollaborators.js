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
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };
  return (
    <View style={styles.collabContainer}>
      <ScrollView>
        <List.Section>
          {collaborators.map((collaborator) => {
            return (
              <>
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
                <Provider>
                  <Portal>
                    <Modal
                      visible={visible}
                      onDismiss={hideModal}
                      contentContainerStyle={containerStyle}
                    >
                      <Text
                        style={styles.title}
                      >{`${collaborator.first} ${collaborator.last}`}</Text>
                    </Modal>
                  </Portal>
                  <Button onPress={showModal}>view</Button>
                </Provider>
              </>
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
