import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Appbar } from 'react-native-paper';

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.top}>
        <Appbar.BackAction onPress={() => console.log('Went back')} />
        <Appbar.Content title="Title" subtitle="Subtitle" />
        <Appbar.Action
          icon="magnify"
          onPress={() => console.log('Searching')}
        />
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => console.log('Shown more')}
        />
      </Appbar.Header>
      <View style={styles.contentContainer}>
        <Image
          source={{ uri: 'https://i.imgur.com/TkIrScD.png' }}
          style={styles.logo}
        />
        <Text style={styles.instructions}>Hello world</Text>
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
          <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>
      </View>
      <Appbar style={styles.bottom}>
        <Appbar.Action
          icon="archive"
          onPress={() => console.log('Pressed archive')}
        />
        <Appbar.Action
          icon="mail"
          onPress={() => console.log('Pressed mail')}
        />
        <Appbar.Action
          icon="label"
          onPress={() => console.log('Pressed label')}
        />
        <Appbar.Action
          icon="delete"
          onPress={() => console.log('Pressed delete')}
        />
      </Appbar>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
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
});
