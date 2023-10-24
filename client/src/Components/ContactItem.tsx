import { CgProfile } from "react-icons/cg";

type Props = {
  setTab: React.Dispatch<React.SetStateAction<string>>;
};

const ContactItem = ({ setTab }: Props) => {
  return (
    <div
      onClick={() => setTab("chat")}
      className="flex gap-3 px-5 py-8 duration-300 h-28 rounded-xl hover:bg-zinc-300"
    >
      <div className="text-5xl text-zinc-500">
        <CgProfile />
      </div>
      <div className="select-none">
        <div>Contact name</div>
        <div>Contact@email</div>
      </div>
    </div>
  );
};
export default ContactItem;
