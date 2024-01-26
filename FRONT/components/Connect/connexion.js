import { View, Text, Image, TextInput, Button } from "react-native";
import React, { useState } from "react";
import styles from "../../screens/WelcomePage/style";
import user from "../../routes/user";
import Home from "../../screens/Home/index";
import { useNavigation } from "@react-navigation/native"; 

// Définition du composant User
const User = () => {
  // Déclaration des états locaux pour gérer le pseudo et le mot de passe
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  // Utilisation du hook useNavigation pour obtenir l'objet de navigation
  const navigation = useNavigation();

  // Fonction appelée lors de la soumission du formulaire de connexion
  const handleSubmit = async () => {
    try {
      // Appel de la fonction connectUser du module user pour tenter la connexion
      const isConnected = await user.connectUser(pseudo, password);
      console.log("submit");

      // Vérification de la réussite de la connexion
      if (isConnected === true) {
        // Affichage d'un message de succès dans la console
        console.log("on est co, navigation devrait être défini :", navigation);
        // Redirection vers la page Home avec le pseudo en paramètre
        navigation.navigate("Home", { pseudo: pseudo });
      } else {
        // Gérer le cas où la connexion a échoué
        console.log("La connexion a échoué");
      }
    } catch (error) {
      // Gestion des erreurs liées à la connexion
      console.error("Erreur lors de la connexion :", error);
      // Gérer l'erreur correctement
    }
  };

  // Rendu du composant
  return (
    <View style={styles.container}>
      {/* Titre du formulaire de connexion */}
      <Text style={styles.heading}>Connexion</Text>
      {/* Champ de saisie pour le pseudo */}
      <TextInput
        style={styles.input}
        placeholder="Pseudo"
        onChangeText={setPseudo}
        value={pseudo}
      />
      {/* Champ de saisie pour le mot de passe avec l'option sécurisée */}
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      {/* Bouton de connexion avec l'appel à la fonction handleSubmit lors du clic */}
      <Button title="Connexion" onPress={handleSubmit} />
    </View>
  );
};

export default User;
