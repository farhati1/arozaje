import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React from 'react'

const Connexion = ({ navigation}) => {
    return (
      
        //connexion
       <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur l'application !</Text>
      <Button title="Se connecter" onPress={() => navigation.navigate('Connexion')} />
      <Button title="S'inscrire" onPress={() => navigation.navigate('Inscription')} />
    </View>
  );
};

const ConnexionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Écran de connexion</Text>
    </View>
  );
};

const InscriptionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Écran d'inscription</Text>
    </View>
  );
};
           

   const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});             

   

export default Connexion;