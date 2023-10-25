import { useLocation, useRoutes } from "react-router-dom";
import { cloneElement } from "react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import Login from "../../Pages/Login";
import App from "../../Pages/App";
import { UserContext } from "../../Context/UserContext";
/* import Chat from "./Pages/Chat"; */

const Routes = () => {
  const [logged, setLogged] = useState("");

  const router = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/chat",
      element: <App />,
      /*  children: [{ path: "/chat/:id", element: <Chat /> }], */
    },
  ]);

  const location = useLocation();

  if (!router) return null;

  return (
    <UserContext.Provider value={{ logged, setLogged }}>
      <AnimatePresence mode="wait">
        {cloneElement(router, { key: location.pathname })}
      </AnimatePresence>
    </UserContext.Provider>
  );
};

export default Routes;
