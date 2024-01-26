import { View, Text, FlatList } from "react-native";
import React from "react";
import { fakeChats } from "../../fakeData/fakeChats";
import MessagesList from "../../components/MessageList";
import styles from "./style";

const Messages = ({navigation}) => {
  return (
    <FlatList data={fakeChats} keyExtractor={item => item.id} style={styles.root} showsVerticalScrollIndicator={false} renderItem={({ item }) => {
      return <MessagesList item={item} navigation={navigation} />;
    }} />

    
  );
};

export default Messages;
