import { CgProfile } from "react-icons/cg";
import { AiOutlineArrowLeft, AiOutlineSend } from "react-icons/ai";

type Props = {
  setTab: React.Dispatch<React.SetStateAction<string>>;
};

const Chat = ({ setTab }: Props) => {
  return (
    <>
      <div className="h-[10vh] border-b border-l border-zinc-400 flex text-4xl items-center gap-6 pl-6">
        <div className="block md:hidden" onClick={() => setTab("contacts")}>
          <AiOutlineArrowLeft />
        </div>
        <CgProfile />
        <span className="text-2xl font-light">Name</span>
      </div>
      <div className="h-[90vh] overflow-y-auto relative " id="chat-section">
        <div id="input" className="absolute flex w-full bottom-5">
          <input
            type="text"
            name=""
            id=""
            className="px-3 w-[90%]  mx-5 text-2xl border-2 border-black rounded-2xl bg-zinc-100"
          />
          <div
            id="send"
            className="grid p-5 text-3xl text-white duration-200 bg-green-500 rounded-full place-content-center hover:scale-125"
          >
            <AiOutlineSend />
          </div>
        </div>
      </div>
    </>
  );
};
export default Chat;
