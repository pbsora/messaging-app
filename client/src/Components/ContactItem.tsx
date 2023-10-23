import { CgProfile } from "react-icons/cg";

const ContactItem = () => {
  return (
    <div className="border-b border-black h-28 flex p-6 gap-3">
      <div className="text-5xl">
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
