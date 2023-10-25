import MessageItem from "../MessageItem";
import { newMessage } from "../Messages/NewMessage";

type Props = {
  messageList: {
    author: string;
    date: number;
    message: string;
    messageId: string;
    name: string;
  }[];
};

const ChatBody = ({ messageList }: Props) => {
  console.log(messageList);
  return (
    <div className=" h-[79vh] flex flex-col overflow-y-auto">
      {messageList.map((message) => (
        <MessageItem message={newMessage(message)} />
      ))}
    </div>
  );
};

export default ChatBody;
