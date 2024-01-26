import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import styles from './style';

const MessageInput = ({ userId }) => {
  const [messageInput, setMessageInput] = useState('');

  const sendMessage = async () => {
    if (messageInput.trim() === '') {
      return;
    }

    try {
      await addDoc(collection(database, 'chats'), {
        text: messageInput,
        sender: userId,
        timestamp: new Date().toISOString(),
      });
    
      setMessageInput('');
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={messageInput}
        onChangeText={setMessageInput}
        placeholder="Tapez votre message..."
      />
      <TouchableOpacity onPress={sendMessage}>
        <MaterialCommunityIcons name="send" size={24} style={styles.sendIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default MessageInput;