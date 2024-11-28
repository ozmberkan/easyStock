import Logo from "../UI/Logo";
import { TbHome } from "react-icons/tb";
import MainMenu from "./children/MainMenu";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiBox } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";
import MobileBar from "./MobileBar";
import { BsDatabaseAdd } from "react-icons/bs";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import profile from "~/assets/profile.jpg";
import { Link } from "react-router-dom";

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
            {
              name: "Geri Bildirimler",
              path: "/feedbacks",
              icon: HiOutlineChatBubbleLeftRight,
            },
          ]}
        />
        <MainMenu
          label="YARDIM"
          linkTitles={[
            {
              name: "İletişim",
              path: "/contact",
              icon: IoChatboxEllipsesOutline,
            },
          ]}
        />
        <div className=" mt-auto pt-5 border-t ">
          <Link
            to="/my-account"
            className="p-2 hover:bg-neutral-100 flex items-center gap-x-3 rounded-xl cursor-pointer"
          >
            <img src={profile} className="w-10 h-10 rounded-md object-cover" />
            <div className="flex flex-col">
              <span className="text-xs text-neutral-500">@ozmberkan</span>
              <span className="text-xs text-neutral-500">
                ozmberkan@gmail.com
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
