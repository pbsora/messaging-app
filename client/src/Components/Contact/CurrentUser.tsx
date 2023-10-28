import { CgProfile } from "react-icons/cg";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { socket } from "../../Config/socket";

const CurrentUser = () => {
  const [user] = useLocalStorage("user");

  return (
    <>
      <CgProfile />
      <span className="text-xl">
        {user} {socket.id}
      </span>
    </>
  );
};

export default CurrentUser;
