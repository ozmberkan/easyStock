import Logo from "../UI/Logo";
import { IoMdExit } from "react-icons/io";
import { TbHome, TbUsers } from "react-icons/tb";
import MainMenu from "./children/MainMenu";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiBox } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
import MobileBar from "./MobileBar";
import { BsDatabaseAdd } from "react-icons/bs";

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
            { name: "Ürün Ekle", path: "/add-product", icon: BsDatabaseAdd },
          ]}
        />
        <MainMenu
          label="BİZ KİMİZ"
          linkTitles={[
            {
              name: "İletişim",
              path: "/contact",
              icon: IoChatboxEllipsesOutline,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Sidebar;
