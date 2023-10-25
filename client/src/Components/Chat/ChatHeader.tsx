import { AiOutlineArrowLeft } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

type Props = {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  username: string;
};
const ChatHeader = ({ setTab, username }: Props) => {
  return (
    <div className="h-[10vh] border-b border-l border-zinc-400 flex text-4xl items-center gap-6 pl-6">
      <div className="block md:hidden" onClick={() => setTab("contacts")}>
        <AiOutlineArrowLeft />
      </div>
      <CgProfile />
      <span className="text-2xl font-light">
        {username ? username[0].toUpperCase() + username?.slice(1) : ""}
      </span>
    </div>
  );
};
export default ChatHeader;
