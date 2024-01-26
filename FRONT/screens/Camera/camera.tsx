import { View, Text, Image, StyleSheet, TextInput, Button, Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from "react";
import post from '../../routes/post';




// Fonction pour sélectionner une image
const openImagePicker = async (setImageUrl) => {
  if (Platform.OS !== 'web') {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission non accordée', 'Vous devez autoriser l\'accès à la bibliothèque de médias pour sélectionner une image.', [{ text: 'OK' }]);
      return;
    }
  }

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    setImageUrl(result.uri);
  }
};

// Fonction pour prendre une photo
const takePhoto = async (setImageUrl) => {
  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    setImageUrl(result.uri);
  }
};


const Camera = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [adresse, setAdresse] = useState('');

  //Envoie des données au back
  const handleSubmit = async () => {
    console.log('cfcr');
    try {
      const newPostCreated = await post.createPost(titre, [], imageUrl, "test", description, adresse);
    }
    catch (error) {
      console.log(error);
    }
    console.log('fait');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Créé un post</Text>
      <TextInput
        style={styles.input}
        placeholder="Titre du post"
        onChangeText={setTitre}
        value={titre}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Description du post"
        onChangeText={setDescription}
        value={description}
      />
      <TextInput
        style={styles.input}
        placeholder="Adresse du post"
        onChangeText={setAdresse}
        value={adresse}
      />
      <Button title="Sélectionner une image" onPress={() => openImagePicker(setImageUrl)} style={styles.button}></Button>
      <Button title="Prendre une photo" onPress={() => takePhoto(setImageUrl)} style={styles.button}></Button>
      {imageUrl ? <Image source={{ uri: imageUrl }} style={styles.image} /> : null}
      <Button title="Créer un post" onPress={handleSubmit} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  textinput: {
    width: '80%',
    height: 90,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    marginBottom: 20,
    width: 20,
    height: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Camera;