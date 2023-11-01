import { BsFillChatLeftFill, BsArchive } from "react-icons/bs";
import { GiHamburgerMenu, GiPlagueDoctorProfile } from "react-icons/gi";
import { AiFillStar, AiOutlinePhone, AiFillGithub } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";

import { useNavigate } from "react-router-dom";
import axios from "axios";
/* import { socket } from "../Config/socket"; */

type Props = {
  setSide: React.Dispatch<React.SetStateAction<boolean>>;
  side: boolean;
};

const Sidebar = ({ setSide, side }: Props) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await axios.get("/log-out", { withCredentials: true });
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div
        id="sidebar"
        className={`col-span-1 bg-zinc-900  ${
          side ? "absolute" : "hidden"
        } xl:relative  xl:block text-white text-2xl w-full md:w-[30vw] lg:w-[25vw] xl:w-full h`}
      >
        <div
          id="head"
          className="grid place-content-center  h-[10vh] mb-6 text-5xl relative"
        >
          <div
            className="absolute text-2xl icon top-5 left-5 xl:hidden"
            onClick={() => setSide(false)}
          >
            <GiHamburgerMenu />
          </div>
          <div className="py-6 border-b icon group">
            <AiFillGithub />
            <span className="sidebar-tooltip group-hover:scale-100">
              Check out my Github
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between  h-[87vh]">
          <div
            id="icons"
            className="flex flex-col items-center justify-start flex-1 gap-10 "
          >
            <div className="icon group">
              <BsFillChatLeftFill />
              <span className="sidebar-tooltip group-hover:scale-100">
                Messages
              </span>
            </div>
            <div className="icon group">
              <AiFillStar />
              <span className="sidebar-tooltip group-hover:scale-100">
                Favorites
              </span>
            </div>
            <div className="icon group">
              <AiOutlinePhone />
              <span className="sidebar-tooltip group-hover:scale-100">
                Calls
              </span>
            </div>
          </div>
          <div
            id="bottom-sidebar"
            className="grid pb-6 place-content-center gap-9"
          >
            <div className="icon group">
              <BsArchive />
              <span className="sidebar-tooltip group-hover:scale-100">
                Archived
              </span>
            </div>
            <div className="icon group">
              <FiSettings />
              <span className="sidebar-tooltip group-hover:scale-100">
                Settings
              </span>
            </div>
            <div className="icon group">
              <GiPlagueDoctorProfile />
              <span className="sidebar-tooltip group-hover:scale-100">
                Profile
              </span>
            </div>
            <div className="icon group" onClick={handleLogout}>
              <BiLogOut />
              <span className="sidebar-tooltip group-hover:scale-100">
                Log-out
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
