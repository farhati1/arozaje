import { View, Text, Image, TextInput, Button } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import Inscription from "../../components/Connect/inscription";
import Connexion from "../../components/Connect/connexion";

const Profil = () => {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [text, setText] = useState(" Vous n'avez pas encore choisi de role");
  const [VisibleConnex, setVisibleConnex] = useState(false);
  const [VisibleInsc, setVisibleInsc] = useState(false);

  tabBarShowLabel: false;

  const InscriptionClick = () => {
    if (VisibleConnex) {
      setVisibleConnex(false);
    }
    setVisibleInsc(!VisibleInsc);
  };

  const ConnexionClick = () => {
    if (VisibleInsc) {
      setVisibleInsc(false);
    }
    setVisibleConnex(!VisibleConnex);
  };

  return (
    <View style={styles.container} >
      <Button title="Inscription" onPress={InscriptionClick} />
      <Button title="Connexion" onPress={ConnexionClick} />
      {VisibleInsc && <Inscription />}
      {VisibleConnex && <Connexion />}
    </View>
  );
};

export default Profil;
