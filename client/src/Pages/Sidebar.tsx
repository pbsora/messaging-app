import { BsFillChatLeftFill, BsArchive } from "react-icons/bs";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { AiFillStar, AiOutlinePhone, AiFillGithub } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <>
      <div
        id="head"
        className="grid place-content-center   h-[10vh] mb-6 text-5xl "
      >
        <div className="cursor-pointer border-b pb-6 w-24 grid place-content-center hover:text-zinc-300 duration-200">
          <AiFillGithub />
        </div>
      </div>
      <div className="flex flex-col justify-between  h-[87vh]">
        <div
          id="icons"
          className=" flex flex-col justify-start items-center gap-10  flex-1  "
        >
          <div className="cursor-pointer hover:scale-125  duration-200">
            <BsFillChatLeftFill />
          </div>
          <div className="cursor-pointer hover:scale-125  duration-200">
            <AiFillStar />
          </div>
          <div className="cursor-pointer hover:scale-125  duration-200">
            <AiOutlinePhone />
          </div>
        </div>
        <div
          id="bottom-sidebar"
          className=" grid place-content-center gap-9 pb-6"
        >
          <div className="cursor-pointer hover:scale-125  duration-200">
            <BsArchive />
          </div>
          <div className="cursor-pointer hover:scale-125  duration-200">
            <FiSettings />
          </div>
          <div className="cursor-pointer hover:scale-125  duration-200">
            <GiPlagueDoctorProfile />
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
