import { useState } from "react";

import Chat from "./Pages/Chat";
import Contacts from "./Pages/Contacts";
import Sidebar from "./Pages/Sidebar";

function App() {
  const [tab, setTab] = useState("contacts");

  return (
    <div className="md:grid md:grid-cols-12 font-roboto">
      <button
        className="md:hidden"
        onClick={() => setTab(tab === "contacts" ? "chat" : "contacts")}
      >
        Change tab
      </button>
      <div
        id="sidebar"
        className="col-span-1 bg-zinc-900 h-screen  hidden lg:block text-white text-4xl"
      >
        <Sidebar />
      </div>
      <div
        className={`col-span-3  bg-zinc-100 ${
          tab === "chat" && "hidden md:block"
        } h-screen`}
      >
        <Contacts />
      </div>
      <div
        className={`lg:col-span-8 md:col-span-9  ${
          tab === "contacts" && "hidden md:block"
        }  h-screen`}
      >
        <Chat />
      </div>
    </div>
  );
}

export default App;
