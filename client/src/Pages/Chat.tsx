import { useEffect, useRef, useState } from "react";

import { socket } from "../Config/socket";
import ChatBody from "../Components/Chat/ChatBody";
import ChatFooter from "../Components/Chat/ChatFooter";
import ChatHeader from "../Components/Chat/ChatHeader";
import useLocalStorage from "../Hooks/useLocalStorage";

import { Message, selectedUser } from "../Types & Interfaces/Types";

type Props = {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  selectedUser: selectedUser;
  tab: string;
};

const Chat = ({ setTab, selectedUser, tab }: Props) => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState<Message[]>([]);
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  const [user] = useLocalStorage("user");
  const { userID } = selectedUser;

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage = {
      message,
      name: user,
      messageId: `${socket.id}${Math.random()}`,
      author: socket.id,
      to: userID,
      date: Date.now(),
    };

    if (!message.trim() || !user) return;

    socket.emit("private message", { content: newMessage, to: userID });
    handleNewMessage(newMessage);
    setMessage("");
  };

  const handleNewMessage = (message?: Message) => {
    //Tried using only the setter but prev value was buggy
    const newList = [...messageList];
    message && newList.push(message);
    setMessageList(newList);
  };

  socket.on("private message", ({ content, from }) => {
    if (userID === from) {
      handleNewMessage(content);
    }
    /* console.log(content); */
  });

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  return (
    <>
      <div
        className={`max-h-screen lg:col-span-15 col-span-12 xl:col-span-14 md:col-span-14 ${
          tab === "contacts" && "hidden md:block"
        }`}
      >
        <ChatHeader setTab={setTab} selectedUser={selectedUser} />
        <form
          className="h-[90vh] overflow-y-auto relative "
          id="chat-section"
          onSubmit={handleSendMessage}
        >
          <ChatBody messageList={messageList} lastMessageRef={lastMessageRef} />
          <ChatFooter setMessage={setMessage} message={message} />
        </form>
      </div>
    </>
  );
};
export default Chat;
