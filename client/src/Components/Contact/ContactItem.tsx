import { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { useParams } from "react-router-dom";

type Props = {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  user: { id: number; username: string };
  setContact: React.Dispatch<React.SetStateAction<number>>;
};

const ContactItem = ({ setTab, user, setContact }: Props) => {
  const url = useParams();

  useEffect(() => {
    if (!Object.keys(url).length) setTab("contact");
    else setTab("chat");
  }, [url, setTab]);

  return (
    <div
      className="flex gap-3 px-5 py-8 duration-300 h-28 rounded-xl hover:bg-zinc-300"
      onClick={() => {
        setTab("chat");
        {
          setContact(user.id);
        }
      }}
    >
      <div className="text-5xl text-zinc-500">
        <CgProfile />
      </div>
      <div className="select-none">
        <div>{user.username}</div>
        <div>Contact@email {user.id}</div>
      </div>
    </div>
  );
};
export default ContactItem;
