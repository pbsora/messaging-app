import MessageItem from "../MessageItem";

/* type Props = {}; */
const ChatBody = (/* props: Props */) => {
  return (
    <div className=" h-[79vh] flex flex-col-reverse overflow-y-auto">
      <MessageItem
        message={{
          content:
            "    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit corporis mollitia neque beatae saepe reiciendis labore voluptates molestiae a aut repudiandae veritatis distinctio hic, dolore omnis harum! Natus, dicta officiis?          ",
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
