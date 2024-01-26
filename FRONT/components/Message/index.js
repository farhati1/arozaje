import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './style';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';


dayjs.extend(relativeTime);

const Messages = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(database, 'chats'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChats(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <FlatList
      data={chats}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          {/* Afficher d'autres informations du chat */}
        </View>
      )}
    />
  );
};

export default Messages;
