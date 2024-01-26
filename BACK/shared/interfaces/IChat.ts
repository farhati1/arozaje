// IChat.ts
import IMessage from './IMessage';

interface IChat {
    _id: string;
    participants: string[];
    messages: IMessage[];
  }
  
  export default IChat;
  