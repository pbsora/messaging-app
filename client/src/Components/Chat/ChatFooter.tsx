import { AiOutlineSend } from "react-icons/ai";

type Props = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
};
const ChatFooter = ({ setMessage, message }: Props) => {
  return (
    <div id="chat-footer" className="absolute flex w-full bottom-5">
      <input
        type="text"
        value={message}
        placeholder="Message..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setMessage(e.target.value)
        }
        className="px-3 w-[90%]  mx-5 text-2xl border-2 border-black rounded-2xl bg-zinc-100"
      />
      <button
        id="send"
        className="grid p-3 mr-2 text-3xl text-white duration-200 bg-green-500 rounded-full place-content-center hover:scale-125"
      >
        <AiOutlineSend />
      </button>
    </div>
  );
};
export default ChatFooter;
