import { DateTime } from "ts-luxon";

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
  const { date, content } = message;

  return (
    <>
      <p>{content}</p>
      <span className="self-end mt-3">
        {DateTime.fromJSDate(
          typeof date === "number" ? new Date(date) : date
        ).toLocaleString(DateTime.TIME_SIMPLE)}
      </span>
    </>
  );
};
export default MessageItem;
