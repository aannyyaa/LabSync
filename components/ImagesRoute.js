import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Button, Card, Colors, Title } from 'react-native-paper';
import images from '../db/images';

const ImagesRoute = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    let imageSource;

    setSelectedImage({ localUri: pickerResult.uri });
    if (selectedImage !== null) {
      imageSource = { uri: selectedImage.localUri };

      console.log('IMAGE');
    }
  };

  const renderItem = ({ item }) => {
    return (
      <Card style={styles.card}>
        <Card.Content>
          <Title>{item.title}</Title>
        </Card.Content>
        <Card.Cover source={{ uri: item.uri }} />
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {selectedImage !== null ? (
        <Card style={styles.card}>
          <Card.Content>
            <Title>New Image</Title>
          </Card.Content>
          <Card.Cover source={{ uri: selectedImage.localUri }} />
        </Card>
      ) : (
        <Text></Text>
      )}
      <Button
        style={styles.button}
        mode="contained"
        icon="camera-plus"
        color={Colors.cyan400}
        onPress={openImagePickerAsync}
      >
        Add
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '33%',
    marginLeft: '33%',
  },
  card: {
    minWidth: 300,
    margin: 10,
    marginBottom: 25,
  },
});

export default ImagesRoute;
