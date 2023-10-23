import React from "react";
import ContactItem from "../Components/ContactItem";
import { AiFillPlusSquare } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  setSide: React.Dispatch<React.SetStateAction<boolean>>;
  side: boolean;
};

const Contacts = ({ setTab, setSide, side }: Props) => {
  return (
    <>
      <div className="h-[10vh] border-b border-zinc-400 flex justify-between  px-6 items-center  gap-3  ">
        <div
          className={`text-2xl  icon text-zinc-500 xl:hidden ${
            side && "hidden"
          }`}
          onClick={() => setSide(true)}
        >
          <GiHamburgerMenu />
        </div>
        <span className="text-2xl lg:text-3xl">Contacts</span>
        <div className="text-4xl icon text-zinc-500">
          <AiFillPlusSquare />
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto ">
        <ContactItem setTab={setTab} />
        <ContactItem setTab={setTab} />
      </div>
    </>
  );
};
export default Contacts;
