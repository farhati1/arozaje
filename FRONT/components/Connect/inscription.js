import { View, Text, Image, TextInput, Button } from "react-native";
import React, { useState } from "react";
import styles from "../../screens/WelcomePage/style";
// import IUser from "../../../shared/interfaces/IUser";
import user from "../../routes/user";

const NewUserPage = () => {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState(" Vous n'avez pas encore choisi de role");

  const handleButtonClick = (newText) => {
    setText(newText);
  };

  const handleSubmit = async (navigation) => {
    console.log("submit");
    // const newUser: IUser = {
    //   name: name,
    //   lastName: lastName,
    //   email: email,
    //   userId: pseudo,
    //   password: password,
    //   isBotaniste: false,
    //   plantGuarded: [],
    // };
    try {
      const newuser = await user.createUser(newUser);
      console.log("user created");
      navigation.navigate("Connexion");
    } catch (error) {
      console.error(error);
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Inscription</Text>
      <TextInput
        style={styles.input}
        placeholder="Pseudo"
        onChangeText={setPseudo}
        value={pseudo}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="nom"
        onChangeText={setLastName}
        value={lastName}
      />
      <TextInput
        style={styles.input}
        placeholder="prenom"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="email"
        onChangeText={setEmail}
        value={email}
      />
      <Text style={styles.label}>Choisiser un role:</Text>
      <View style={styles.radioGroup}>
        <View style={styles.radioOption}>
          <Button
            title="Client"
            onPress={() => handleButtonClick("Role choisi : Client")}
          />
        </View>
        <View style={styles.radioOption}>
          <Button
            title="Botaniste"
            onPress={() => handleButtonClick("Role choisi : Botaniste")}
          />
        </View>
      </View>
      <Text>{text}</Text>
      <Button title="S'inscrire" onPress={() => handleSubmit(navigator)} />
    </View>
  );
};

export default NewUserPage;
