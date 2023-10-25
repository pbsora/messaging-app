import { Message } from "../../Types & Interfaces/Types";

export const newMessage = (message: Message) => {
  return {
    content: message.message,
    name: message.name,
    author: message.author,
    date: message.date,
    messageId: message.messageId,
  };
};
