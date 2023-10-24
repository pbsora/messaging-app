import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ILogged } from "../Context/UserContext";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const { logged, setLogged } = useContext(UserContext) as ILogged;
  const [login, setLogin] = useState("");

  useEffect(() => {
    if (logged) navigate("/chat");
  }, [logged, navigate]);

  const formLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLogged(login);
    navigate("/chat");
  };

  return (
    <motion.div
      className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black"
      exit={{ x: 5000, opacity: 0, transition: { duration: 0.7 } }}
    >
      <form
        action=""
        className="w-1/4 border border-black h-[40vh] bg-zinc-200 flex flex-col items-center gap-6 "
        onSubmit={formLogin}
      >
        <div className="w-full mt-3 text-center ">
          <label htmlFor="username" className="block text-2xl font-roboto">
            Username
          </label>
          <input
            type="text"
            className="w-3/4 p-2 border-2 border-black rounded-xl"
            value={login}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLogin(e.target.value)
            }
          />
        </div>
        <button className="px-6 py-3 text-white bg-black border border-white rounded-xl">
          Login
        </button>
      </form>
    </motion.div>
  );
};
export default Login;