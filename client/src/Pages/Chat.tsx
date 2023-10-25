import { CgProfile } from "react-icons/cg";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect, useState } from "react";
import { socket } from "../Config/socket";
import ChatBody from "../Components/Chat/ChatBody";
import ChatFooter from "../Components/ChatFooter";

type Props = {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  selectedChat: { id: number; username: string };
};

const Chat = ({ setTab, selectedChat }: Props) => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState<string[]>([]);

  const { username } = selectedChat;
  const formattedName = username
    ? username[0].toUpperCase() + username?.slice(1)
    : "";

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    socket.emit("send-message", message);
    setMessage("");
  };

  socket.on("chat-message", (data) => {
    //Tried using only the setter but prev value was buggy
    const newList = [...messageList];
    newList.push(data);
    setMessageList(newList);
  });

  useEffect(() => {
    console.log(messageList);
  }, [messageList]);

  return (
    <>
      <div className="h-[10vh] border-b border-l border-zinc-400 flex text-4xl items-center gap-6 pl-6">
        <div className="block md:hidden" onClick={() => setTab("contacts")}>
          <AiOutlineArrowLeft />
        </div>
        <CgProfile />
        <span className="text-2xl font-light">{formattedName}</span>
      </div>
      <form
        className="h-[90vh] overflow-y-auto relative "
        id="chat-section"
        onSubmit={handleSendMessage}
      >
        <ChatBody />
        <ChatFooter setMessage={setMessage} message={message} />
      </form>
    </>
  );
};
export default Chat;
