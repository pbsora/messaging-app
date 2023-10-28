import { AiOutlineArrowLeft } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { selectedUser } from "../../Types & Interfaces/Types";

type Props = {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  selectedUser: selectedUser;
};
const ChatHeader = ({ setTab, selectedUser }: Props) => {
  const { username } = selectedUser;

  return (
    <div className="h-[10vh] border-b border-l border-zinc-400 flex text-4xl items-center gap-6 pl-6">
      <div className="block " onClick={() => setTab("contacts")}>
        <AiOutlineArrowLeft />
      </div>
      <CgProfile />
      <span className="text-2xl font-light">{username || ""}</span>
    </div>
  );
};
export default ChatHeader;
