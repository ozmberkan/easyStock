import { CgShutterstock } from "react-icons/cg";

const Logo = () => {
  return (
    <div className="pb-2 border-b border-zinc-300 flex justify-between items-center">
      <div className="flex gap-x-1 items-center rounded-xl text-zinc-600">
        <span className="animate-pulse ">
          <CgShutterstock size={23} />
        </span>
        <span className="font-black font-rajdhani text-lg">easyStock</span>
      </div>
      <div className="relative">
        <div className="w-3 h-3 rounded-md bg-green-400 animate-ping absolute"></div>
        <div className="w-3 h-3 rounded-md bg-green-500 relative"></div>
      </div>
    </div>
  );
};

export default Logo;
