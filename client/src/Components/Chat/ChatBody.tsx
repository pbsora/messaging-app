import useLocalStorage from "../../Hooks/useLocalStorage";

import MessageItem from "../Messages/MessageItem";
import { newMessage } from "../Messages/NewMessage";

type Props = {
  lastMessageRef: React.MutableRefObject<HTMLDivElement | null>;
  messageList: {
    author: string;
    date: number;
    message: string;
    messageId: string;
    name: string;
    to: string;
  }[];
};

const ChatBody = ({ messageList, lastMessageRef }: Props) => {
  const [user] = useLocalStorage("user");

  return (
    <div className=" h-[79vh] flex flex-col overflow-y-auto">
      {messageList.map((message) => (
        <div
          key={message.messageId}
          className={` flex flex-col min-w-[35vw] lg:min-w-[15vw] max-w-[80%] lg:max-w-[50%] shadow-lg h-fit px-6 py-4  m-6  text-black ${
            message.name === user
              ? "self-end bg-green-500 rounded-e-lg rounded-b-lg  "
              : "self-start bg-zinc-100 rounded-b-lg rounded-l-xl"
          }`}
        >
          <MessageItem message={newMessage(message)} />
          <div ref={lastMessageRef} />
        </div>
      ))}
    </div>
  );
};

export default ChatBody;
