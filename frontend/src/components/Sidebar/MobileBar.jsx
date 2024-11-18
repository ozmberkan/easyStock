import React from "react";
import Logo from "../UI/Logo";
import MainMenu from "./children/MainMenu";
import { IoMdExit } from "react-icons/io";
import { TbHome, TbUsers } from "react-icons/tb";
import { BiBox } from "react-icons/bi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const linkBase = [
  { path: "/", icon: TbHome },
  { path: "/products", icon: BiBox },
];

const linkWeWho = [
  { path: "/about", icon: TbUsers },
  { path: "/contact", icon: IoChatboxEllipsesOutline },
];

const MobileBar = () => {
  return (
    <div className="min-w-20 border-r py-4 px-2">
      <div className="h-full flex flex-col justify-center items-center gap-5">
        <Logo />
        <div className="flex flex-col">
          <h1 className="text-xs font-semibold text-neutral-800 mb-2 uppercase">
            TEMEL
          </h1>
          <ul className="text-sm flex flex-col gap-2">
            {linkBase.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="py-2 px-2 rounded-md hover:bg-gray-200 border border-transparent hover:border-neutral-200 text-neutral-700 font-medium flex gap-x-2 items-center"
              >
                {link.icon && <link.icon size={20} />}
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xs font-semibold text-neutral-800 mb-2 uppercase">
            BİZ KİMİZ
          </h1>
          <ul className="text-sm flex flex-col gap-2">
            {linkWeWho.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="py-2 px-2 rounded-md hover:bg-gray-200 border border-transparent hover:border-neutral-200 text-neutral-700 font-medium flex gap-x-2 items-center"
              >
                {link.icon && <link.icon size={20} />}
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <button className="mt-auto bg-red-100 text-red-700 font-medium px-4 py-2 rounded-md flex justify-start items-center gap-x-2 hover:bg-red-700 hover:text-white transition-all duration-300">
          <IoMdExit />
        </button>
      </div>
    </div>
  );
};

export default MobileBar;
