import axios from 'axios';
import IChat from '../shared/interfaces/IChat';
import IMessage from '../shared/interfaces/IMessage';
import dotenv from 'dotenv';

async function createChat(participants: string[]): Promise<IChat> {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/chat/create`, {
      participants,
    });

    const newChat: IChat = res.data as IChat;
    return newChat;
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function addMessageToChat(chatId: string, sender: string, content: string): Promise<IChat> {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/chat/add-message/${chatId}`, {
      sender,
      content,
    });

    const updatedChat: IChat = res.data as IChat;
    return updatedChat;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export default {
  createChat,
  addMessageToChat,
};
