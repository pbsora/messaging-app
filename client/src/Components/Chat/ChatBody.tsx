import MessageItem from "../MessageItem";

/* type Props = {}; */
const ChatBody = (/* props: Props */) => {
  return (
    <div className=" h-[79vh] flex flex-col-reverse overflow-y-auto">
      <MessageItem
        message={{
          content: "Teste",
          author: "Sora",
          date: Date.now(),
          type: 1,
        }}
      />
      <MessageItem
        message={{
          content: "Teste",
          author: "Sora",
          date: Date.now(),
          type: 0,
        }}
      />
    </div>
  );
};
export default ChatBody;
