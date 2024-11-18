import { CgShutterstock } from "react-icons/cg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="pb-4 border-b border-zinc-300 flex justify-between items-center">
      <div className="flex gap-x-1 items-center rounded-xl text-zinc-600">
        <Link to="/" className="animate-pulse ">
          <CgShutterstock size={23} />
        </Link>
        <span className="font-black font-rajdhani text-lg lg:block hidden">
          easyStock
        </span>
      </div>
      <div className="lg:relative hidden">
        <div className="w-3 h-3 rounded-md bg-green-400 animate-ping absolute"></div>
        <div className="w-3 h-3 rounded-md bg-green-500 relative"></div>
      </div>
    </div>
  );
};

export default Logo;
