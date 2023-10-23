import { CgProfile } from "react-icons/cg";
import { AiOutlineArrowLeft } from "react-icons/ai";

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
        <span className="font-light text-3xl">Name</span>
      </div>
      <div className="h-[90vh] overflow-y-auto " id="chat-section"></div>
    </>
  );
};
export default Chat;
