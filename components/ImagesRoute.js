import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Button, Colors, IconButton } from 'react-native-paper';
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

  return (
    <View style={styles.contentContainer}>
      {selectedImage !== null ? (
        <Image source={{ uri: selectedImage.localUri }} style={styles.image} />
      ) : (
        <View style={styles.imageContainer}>
          {images.map((image) => {
            return (
              <Image
                key={image.id}
                source={{ uri: image.uri }}
                style={styles.image}
              />
            );
          })}
        </View>
      )}
      <Button style={styles.button}
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
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: '3%',
    borderColor: 'black',
    borderWidth: 1,
  },
  imageContainer: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  button: {
    width: "33%"
  }
});

export default ImagesRoute;
