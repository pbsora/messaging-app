import { useEffect, useState } from "react";

import { socket } from "../Config/socket";
import ChatBody from "../Components/Chat/ChatBody";
import ChatFooter from "../Components/Chat/ChatFooter";
import ChatHeader from "../Components/Chat/ChatHeader";
import useLocalStorage from "../Hooks/useLocalStorage";

import { Message } from "../Types & Interfaces/Types";

type Props = {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  selectedChat: { id: number; username: string };
  tab: string;
};

const Chat = ({ setTab, selectedChat, tab }: Props) => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState<Message[]>([]);

  const [user] = useLocalStorage("user");
  const { username } = selectedChat;

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMessage = {
      message,
      name: user,
      messageId: `${socket.id}${Math.random()}`,
      author: socket.id,
      date: Date.now(),
    };

    if (message.trim() && user) {
      socket.emit("message", newMessage);
    }
    handleNewMessage(newMessage);
    setMessage("");
  };

  const handleNewMessage = (message?: Message) => {
    const newList = [...messageList];
    message && newList.push(message);
    setMessageList(newList);
  };

  socket.on("chat-message", (data) => {
    //Tried using only the setter but prev value was buggy
    handleNewMessage(data);
  });

  /*  useEffect(() => {
    console.log(messageList);
  }, [messageList]); */

  return (
    <>
      <div
        className={` max-h-screen  lg:col-span-15 col-span-12 xl:col-span-14 md:col-span-14 ${
          tab === "contacts" && "hidden md:block"
        }   `}
      >
        <ChatHeader setTab={setTab} username={username} />
        <form
          className="h-[90vh] overflow-y-auto relative "
          id="chat-section"
          onSubmit={handleSendMessage}
        >
          <ChatBody messageList={messageList} />
          <ChatFooter setMessage={setMessage} message={message} />
        </form>
      </div>
    </>
  );
};
export default Chat;
