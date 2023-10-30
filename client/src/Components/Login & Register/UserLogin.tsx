import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import useLocalStorage from "../../Hooks/useLocalStorage";
import axios from "axios";

const UserLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage("user");

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    user; // Not doing anything, just for intellisense

    const { data } = await axios({
      method: "POST",
      url: "log-in",
      data: {
        username: login.username,
        password: login.password,
      },
      withCredentials: true,
    });
    console.log(data);
    if (data.error) {
      setError(true);
      setErrorMsg(data.error);
    }
    /* setUser(login.username);
    navigate("/chat"); */
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center gap-9  h-[60vh] font-roboto">
        <div className="text-white ">
          <label htmlFor="Username" className="block mb-3 text-3xl">
            Username
          </label>
          <input
            type="text"
            className="px-10 py-3 text-2xl border border-white rounded-lg outline-none bg-zinc-700 focus:border-blue-500"
            onChange={handleChange}
            value={login.username}
            name="username"
            required
          />
        </div>
        <div className="block text-white">
          <label htmlFor="Password" className="block mb-3 text-3xl">
            Password
          </label>
          <input
            type="password"
            className="px-10 py-3 text-2xl border border-white rounded-lg outline-none bg-zinc-700 focus:border-blue-500"
            onChange={handleChange}
            value={login.password}
            name="password"
          />
        </div>
        {error && <p className="text-red-600">{errorMsg}</p>}
        <button
          type="submit"
          className="grid items-center px-24 py-3 text-xl text-center text-white border border-white rounded-xl"
        >
          Login
        </button>
      </div>
    </form>
  );
};
export default UserLogin;
