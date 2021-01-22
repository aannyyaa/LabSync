import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {
  Appbar,
  Avatar,
  BottomNavigation,
  Colors,
  IconButton,
} from 'react-native-paper';

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

    let imageSource

    setSelectedImage({ localUri: pickerResult.uri });
    if (selectedImage !== null) {

      imageSource = { uri: selectedImage.localUri }

      console.log('IMAGE');
    }
  };

  return (
    <View style={styles.contentContainer}>
       {selectedImage !== null ?  (<Image
            source={{ uri: selectedImage.localUri }}
            style={styles.thumbnail}
          /> ) : (<Text style={styles.instructions}>add an image of your results</Text>)}
      <IconButton
        icon="camera-plus"
        color={Colors.cyan400}
        size={30}
        onPress={openImagePickerAsync}
      />
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
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  top: {
    left: 0,
    right: 0,
  },
  accountsContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  accounts: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default ImagesRoute;
