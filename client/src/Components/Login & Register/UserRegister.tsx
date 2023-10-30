import React, { ChangeEvent, useState } from "react";
import axios from "axios";

const UserRegister = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await axios({
      method: "POST",
      data: {
        username: user.username,
        password: user.password,
        confirmPassword: user.confirmPassword,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      withCredentials: true,
      url: "register",
    });
    if (data.errors) {
      //Express validation
      setError(true);
      setErrorMsg(data.errors[0].msg);
      console.log(data.errors);
      return;
    } else if (data.error) {
      //User exists validation
      setError(true);
      setErrorMsg(data.error);
    }
    console.log(data);
  };

  return (
    <form
      action="#"
      className="grid h-auto gap-5 mt-10 mb-10 place-content-center font-roboto"
      onSubmit={handleRegister}
    >
      <div className="text-white ">
        <label htmlFor="firstName" className="block mb-3 text-3xl">
          First Name
        </label>
        <input
          type="text"
          className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500"
          name="firstName"
          onChange={handleChange}
          value={user.firstName}
          required
          minLength={2}
        />
      </div>
      <div className="text-white ">
        <label htmlFor="lastName" className="block mb-3 text-3xl">
          Last Name
        </label>
        <input
          type="text"
          className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500"
          name="lastName"
          onChange={handleChange}
          value={user.lastName}
          required
          minLength={2}
        />
      </div>

      <div className="text-white ">
        <label htmlFor="Username" className="block mb-3 text-3xl">
          Username
        </label>
        <input
          type="text"
          className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500"
          name="username"
          onChange={handleChange}
          value={user.username}
          required
          minLength={3}
        />
      </div>
      <div className="block text-white">
        <label htmlFor="Password" className="block mb-3 text-3xl">
          Password
        </label>
        <input
          type="password"
          className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500"
          name="password"
          onChange={handleChange}
          value={user.password}
          minLength={5}
          required
        />
      </div>
      <div className="block text-white">
        <label htmlFor="confirmPassword" className="block mb-3 text-3xl">
          {" "}
          Confirm Password
        </label>
        <input
          type="password"
          className="px-10 py-3 text-2xl border border-white rounded-lg bg-zinc-700 focus:outline-blue-500"
          name="confirmPassword"
          onChange={handleChange}
          value={user.confirmPassword}
          minLength={5}
          required
        />
      </div>
      {error && <p className="text-center text-red-600">{errorMsg}</p>}
      <button
        type="submit"
        className="grid items-center px-24 py-3 mt-5 text-xl text-center text-white border border-white rounded-xl"
      >
        Register
      </button>
    </form>
  );
};

export default UserRegister;
