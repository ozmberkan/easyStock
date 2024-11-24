import Logo from "../UI/Logo";
import { IoMdExit } from "react-icons/io";
import { TbHome, TbUsers } from "react-icons/tb";
import MainMenu from "./children/MainMenu";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiBox } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
import MobileBar from "./MobileBar";

const Sidebar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  if (isTabletOrMobile) {
    return <MobileBar />;
  }

  return (
    <div className="min-w-64 border-r py-4 px-6">
      <div className="h-full flex flex-col gap-5">
        <Logo />
        <MainMenu
          label="Temel"
          linkTitles={[
            { name: "Anasayfa", path: "/", icon: TbHome },
            { name: "Ürünler", path: "/products", icon: BiBox },
          ]}
        />
        <MainMenu
          label="BİZ KİMİZ"
          linkTitles={[
            { name: "Hakkımızda", path: "/about", icon: TbUsers },
            {
              name: "İletişim",
              path: "/contact",
              icon: IoChatboxEllipsesOutline,
            },
          ]}
        />
        <button className="mt-auto bg-red-100 text-red-700 font-medium px-4 py-2 rounded-md flex justify-start items-center gap-x-2 hover:bg-red-700 hover:text-white transition-all duration-300">
          <IoMdExit />
          Çıkış
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
