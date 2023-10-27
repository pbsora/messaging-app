import React from "react";
import ContactItem from "../Components/Contact/ContactItem";
import { AiFillPlusSquare } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import { activeUsers } from "../Types & Interfaces/Types";

type Props = {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  setSide: React.Dispatch<React.SetStateAction<boolean>>;
  setContact: React.Dispatch<React.SetStateAction<number>>;
  activeUsers: activeUsers[];
  side: boolean;
};

const Contacts = ({
  setTab,
  setSide,
  side,
  setContact,
  activeUsers,
}: Props) => {
  return (
    <>
      <div className="h-[10vh] flex justify-between  px-6 items-center gap-3">
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
      <hr className="w-[90%] m-auto border-b-2 border-black"></hr>
      <div className="h-[90vh] overflow-y-auto ">
        {activeUsers.map((user, index) => (
          <div key={user.socketId}>
            <ContactItem
              setTab={setTab}
              user={user}
              index={index}
              setContact={setContact}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Contacts;
