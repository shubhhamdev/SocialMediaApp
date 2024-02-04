import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { RiNotification2Fill } from "react-icons/ri";
import { IoBookmarkSharp } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { useSelector } from "react-redux";
const Header = () => {
  const pageIndictor = useSelector((store) => store.item.pageIndictor);
  return (
    <div className="w-full flex items-center  bg-[#f05a22] p-2">
      <div className=" text-white px-4 py-2 font-semibold">
        <h1>TravelMedia.in</h1>
      </div>
      <div className="w-1/5 flex ml-[28%] items-center justify-around px-4 py-2 bg-white text-[#f9ddcf] rounded-2xl">
        <MdHomeFilled
          size={20}
          className="text-[#f9ddcf] hover:text-[#f05a22] cursor-pointer duration-200"
        />

        <RiNotification2Fill
          size={18}
          className="text-[#f9ddcf] hover:text-[#f05a22] cursor-pointer duration-200"
        />

        <IoBookmarkSharp
          size={18}
          className="text-[#f9ddcf] hover:text-[#f05a22] cursor-pointer duration-200"
        />

        <FaUserLarge
          size={18}
          className="text-[#f9ddcf] hover:text-[#f05a22] cursor-pointer duration-200"
        />
      </div>
    </div>
  );
};

export default Header;
