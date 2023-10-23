import { useState } from "react";

import Chat from "./Pages/Chat";
import Contacts from "./Pages/Contacts";
import Sidebar from "./Pages/Sidebar";

function App() {
  const [tab, setTab] = useState("contacts");
  const [side, setSide] = useState(false);

  return (
    <div className="md:grid md:grid-cols-20 font-roboto relative">
      <div
        id="sidebar"
        className={`col-span-1 bg-zinc-900 h-screen ${
          side ? "absolute" : "hidden"
        } xl:relative  xl:block text-white text-4xl w-full md:w-[30vw] lg:w-[25vw] xl:w-full`}
      >
        <Sidebar setSide={setSide} />
      </div>
      <div
        className={`col-span-8 lg:col-span-5 md:col-span-6 bg-zinc-100 ${
          tab === "chat" && "hidden md:block"
        } h-screen`}
      >
        <Contacts setTab={setTab} setSide={setSide} side={side} />
      </div>
      <div
        className={`lg:col-span-15 col-span-12 xl:col-span-14 md:col-span-14 ${
          tab === "contacts" && "hidden md:block"
        }   h-screen`}
      >
        <Chat setTab={setTab} />
      </div>
    </div>
  );
}

export default App;
