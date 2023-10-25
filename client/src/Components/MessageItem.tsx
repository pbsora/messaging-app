type Props = {
  message: {
    content: string;
    author: string;
    date: Date | number;
    type: number;
  };
};
const MessageItem = ({ message }: Props) => {
  return (
    <div
      className={`w-[35%] shadow-lg h-fit px-6 py-4  m-6  text-black ${
        message.type === 1
          ? "self-end bg-green-500 rounded-e-lg rounded-b-lg  "
          : "self-start bg-zinc-100 rounded-b-lg rounded-l-xl"
      }`}
    >
      <p>{message.content}</p>
    </div>
  );
};
export default MessageItem;
