import { CgProfile } from "react-icons/cg";
import { activeUsers } from "../../Types & Interfaces/Types";

type Props = {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  setContact: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  user: activeUsers;
};

const ContactItem = ({ setTab, user, index, setContact }: Props) => {
  return (
    <div
      className="flex gap-3 px-5 py-8 duration-300 h-28 rounded-xl hover:bg-zinc-300"
      onClick={() => {
        setTab("chat");
        setContact(index);
      }}
    >
      <div className="text-5xl text-zinc-500">
        <CgProfile />
      </div>
      <div className="select-none">
        <div>
          {user.username} {index}
        </div>
        <div>{user.userID}</div>
      </div>
    </div>
  );
};
export default ContactItem;
