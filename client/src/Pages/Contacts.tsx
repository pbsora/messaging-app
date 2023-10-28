import React from "react";
import ContactItem from "../Components/Contact/ContactItem";
import { AiFillPlusSquare } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import { activeUsers } from "../Types & Interfaces/Types";
import CurrentUser from "../Components/Contact/CurrentUser";

type Props = {
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
  setSide: React.Dispatch<React.SetStateAction<boolean>>;
  setContact: React.Dispatch<React.SetStateAction<number>>;
  activeUsers: activeUsers[];
  side: boolean;
};

const Contacts = ({
  tab,
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
      <div className="h-[90vh] overflow-y-auto flex-1 ">
        {activeUsers.map((user, index) => (
          <div key={user.userID}>
            <ContactItem
              setTab={setTab}
              user={user}
              index={index}
              setContact={setContact}
            />
          </div>
        ))}
      </div>
      <div
        id="contact-footer"
        className={`flex items-center gap-4 p-5 text-4xl border-t ${
          tab === "chat" && "hidden"
        }`}
      >
        <CurrentUser />
      </div>
    </>
  );
};
export default Contacts;
