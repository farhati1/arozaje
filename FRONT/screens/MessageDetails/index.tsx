import React, { useState, useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import MessageInput from '../../components/MessageInput.js';

const MessageDetails = ({ userId }) => {
  const [messages, setMessages] = useState([]);

 

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages)
    );
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={newMessages => onSend(newMessages)}
        user={{
          _id: userId,
        }}
      />
      <MessageInput userId={userId} />
    </View>
  );
};

export default MessageDetails;