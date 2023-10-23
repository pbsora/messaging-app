import { CgProfile } from "react-icons/cg";

type Props = {
  setTab: React.Dispatch<React.SetStateAction<string>>;
};

const ContactItem = ({ setTab }: Props) => {
  return (
    <div
      onClick={() => setTab("chat")}
      className="  h-28 flex py-8  px-5 gap-3 rounded-xl hover:bg-zinc-300  duration-300"
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
