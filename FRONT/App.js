import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "react-native-vector-icons";
import React, { Component } from "react";
import Routes from "./routes";

const App = () => {
  return (
    <View style={{ flex: 4 }}>
      <Routes />
    </View>
  );
};

export default App;
export const UserIdContext = React.createContext(null);
