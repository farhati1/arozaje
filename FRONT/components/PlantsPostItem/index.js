import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';

import styles from './style';

const PlantsPostItem = ({ item }) => {
  return (
   
      <View>
        <Image
          style={styles.itemImg}
          source={require('./../../assets/img1.jpg')}
        />
        <Text>{item.libelle}</Text>
        <Text>{item.gardian}</Text>
        <Button style={{ color: 'black' }} title="Détails" />
      </View>
    
  );
};

export default PlantsPostItem;
