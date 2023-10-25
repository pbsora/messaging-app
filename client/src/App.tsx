import { useState } from "react";

import Contacts from "./Pages/Contacts";
import Sidebar from "./Pages/Sidebar";
import Chat from "./Pages/Chat";

const users = [
  {
    id: 0,
    username: "Pedro",
  },
  {
    id: 1,
    username: "Sora",
  },
  {
    id: 2,
    username: "Lucas",
  },
];

function App() {
  const [tab, setTab] = useState("contacts");
  const [side, setSide] = useState(false);
  const [selectedContact, setSelectedContact] = useState(0);

  console.log(selectedContact);

  /* const teste = users.find((obj) => {
    return obj.username === "Pedro";
  });
 */

  return (
    <div className="relative overflow-hidden md:grid md:grid-cols-20">
      <div
        id="sidebar"
        className={`col-span-1 bg-zinc-900  ${
          side ? "absolute" : "hidden"
        } xl:relative  xl:block text-white text-2xl w-full md:w-[30vw] lg:w-[25vw] xl:w-full h`}
      >
        <Sidebar setSide={setSide} />
      </div>
      <div
        className={`  flex flex-col col-span-8 lg:col-span-5 md:col-span-6 bg-zinc-100 ${
          tab === "chat" && "hidden md:block"
        } h-screen`}
      >
        <Contacts
          setTab={setTab}
          setSide={setSide}
          side={side}
          users={users}
          setContact={setSelectedContact}
        />
      </div>
      <div
        className={` max-h-[99vh]  lg:col-span-15 col-span-12 xl:col-span-14 md:col-span-14 ${
          tab === "contacts" && "hidden md:block"
        }   `}
      >
        <Chat setTab={setTab} selectedChat={users[selectedContact]} />
      </div>
    </div>
  );
}

export default App;
