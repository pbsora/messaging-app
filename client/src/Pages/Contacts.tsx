import ContactItem from "../Components/ContactItem";
import { GrContactInfo } from "react-icons/gr";

const Contacts = () => {
  return (
    <>
      <div className="h-[10vh] border-b-2 border-black flex justify-between  px-6 items-center ">
        <span className="text-3xl font-light">Contacts</span>
        <div className="text-4xl">
          <GrContactInfo />
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto ">
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
      </div>
    </>
  );
};
export default Contacts;
