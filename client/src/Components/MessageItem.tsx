import { DateTime } from "ts-luxon";
import useLocalStorage from "../Hooks/useLocalStorage";

type Props = {
  message: {
    content: string;
    name: string;
    author: string;
    date: Date | number;
    messageId: string;
  };
};
const MessageItem = ({ message }: Props) => {
  const { date, content, name } = message;
  const [user] = useLocalStorage("user");

  return (
    <div
      key={message.messageId}
      className={` flex flex-col min-w-[35vw] lg:min-w-[15vw] max-w-[80%] lg:max-w-[50%] shadow-lg h-fit px-6 py-4  m-6  text-black ${
        name === user
          ? "self-end bg-green-500 rounded-e-lg rounded-b-lg  "
          : "self-start bg-zinc-100 rounded-b-lg rounded-l-xl"
      }`}
    >
      <p>{content}</p>
      <span className="self-end mt-3">
        {DateTime.fromJSDate(
          typeof date === "number" ? new Date(date) : date
        ).toLocaleString(DateTime.TIME_SIMPLE)}
      </span>
    </div>
  );
};
export default MessageItem;
