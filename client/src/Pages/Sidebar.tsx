import { BsFillChatLeftFill, BsArchive } from "react-icons/bs";
import { GiHamburgerMenu, GiPlagueDoctorProfile } from "react-icons/gi";
import { AiFillStar, AiOutlinePhone, AiFillGithub } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

type Props = {
  setSide: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ setSide }: Props) => {
  return (
    <>
      <div
        id="head"
        className="grid place-content-center  h-[10vh] mb-6 text-5xl relative"
      >
        <div
          className=" text-2xl  icon  absolute top-5 left-5 xl:hidden"
          onClick={() => setSide(false)}
        >
          <GiHamburgerMenu />
        </div>
        <div className="icon group border-b pb-5">
          <AiFillGithub />
          <span className="sidebar-tooltip group-hover:scale-100">
            Check out my Github
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between  h-[87vh]">
        <div
          id="icons"
          className=" flex flex-col justify-start items-center gap-10  flex-1  "
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
            <span className="sidebar-tooltip group-hover:scale-100">Calls</span>
          </div>
        </div>
        <div
          id="bottom-sidebar"
          className=" grid place-content-center gap-9 pb-6"
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
        </div>
      </div>
    </>
  );
};
export default Sidebar;
