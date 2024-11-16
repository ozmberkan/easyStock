import React from "react";
import { RiInbox2Line } from "react-icons/ri";

const NoData = () => {
  return (
    <div className="p-4 w-full flex justify-center items-center flex-col gap-3">
      <span className="text-neutral-400">
        <RiInbox2Line size={60} className="drop-shadow-2xl" />
      </span>
      <p className="font-medium  text-lg text-zinc-500">Veri bulunamadı.</p>
    </div>
  );
};

export default NoData;
