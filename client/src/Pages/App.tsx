import { useState } from "react";
import { socket } from "../Config/socket";

import Contacts from "./Contacts";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

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

socket.connect();

function App() {
  const [tab, setTab] = useState("contacts");
  const [side, setSide] = useState(false);
  const [selectedContact, setSelectedContact] = useState(0);

  /* const teste = users.find((obj) => {
    return obj.username === "Pedro";
  });
 */

  return (
    <div className="relative overflow-hidden md:grid md:grid-cols-20">
      <Sidebar setSide={setSide} side={side} />

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

      <Chat setTab={setTab} selectedChat={users[selectedContact]} tab={tab} />
    </div>
  );
}

export default App;
