import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import SVG from "./../../assets/plants.svg";
import { FakePlants } from "./../../fakeData/fakePlants.js";
import styles from "./style";

const PlantsItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.scrollableListItem}>
      <SVG width={50} height={50} />
      <Text style={styles.mainText}>{item.mainText}</Text>
      <Text style={styles.subText}>{item.subText}</Text>
    </TouchableOpacity>
  );
};

export default PlantsItem;
