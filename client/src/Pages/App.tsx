import { useEffect, useState } from "react";
import { socket } from "../Config/socket";

import Contacts from "./Contacts";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

import { activeUsers } from "../Types & Interfaces/Types";
/* import NoContacts from "../Components/Chat/NoContacts"; */
import useLocalStorage from "../Hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const testuser: activeUsers = { username: "Sora", socketId: "asfdadfsdf" };

function App() {
  const [tab, setTab] = useState("contacts");
  const [side, setSide] = useState(false);
  const [selectedContact, setSelectedContact] = useState(0);
  const [activeUsers, setActiveUsers] = useState<activeUsers[]>([]);
  const navigate = useNavigate();
  const [user] = useLocalStorage("user");

  useEffect(() => {
    if (!user) {
      localStorage.removeItem("user");
      socket.disconnect();
      navigate("/");
      window.location.reload();
    }
    socket.auth = { username: user };
    socket.connect();

    //Get users that are online and filter myself out
    /* socket.on("newUserResponse", (data) =>
      setActiveUsers(
        data.filter((username: activeUsers) => username.username !== user)
      )
    ); */

    socket.on("users", (data) => setActiveUsers(data));
    if (!activeUsers[0]) setTab("contacts");
  }, [activeUsers, user, navigate]);

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
          activeUsers={activeUsers}
          setTab={setTab}
          setSide={setSide}
          side={side}
          setContact={setSelectedContact}
        />
      </div>

      <Chat setTab={setTab} selectedChat={testuser} tab={tab} />
      {/*  {activeUsers[0] ? (
        <Chat
          setTab={setTab}
          selectedChat={activeUsers[selectedContact]}
          tab={tab}
        />
      ) : (
        <NoContacts />
      )} */}
    </div>
  );
}

export default App;
