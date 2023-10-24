import { useLocation, useRoutes } from "react-router-dom";
import { cloneElement } from "react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import Login from "./Pages/Login";
import App from "./App";
import { UserContext } from "./Context/UserContext";

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
