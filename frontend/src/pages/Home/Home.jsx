import React from "react";
import { TbHome } from "react-icons/tb";
import Breadcrumb from "~/components/UI/Breadcrumb";

const Home = () => {
  return (
    <div className="flex flex-col h-full">
      <Breadcrumb title="Anasayfa" Icon={TbHome} />
      <div className="w-full py-4 flex-grow grid grid-cols-3 grid-rows-3 gap-3">
        <div className="bg-white h-[250px] rounded-xl border shadow">
          <div className="flex items-center justify-center h-full">
            <h1 className="text-2xl font-semibold">Merhaba</h1>
          </div>
        </div>
        <div className="bg-white h-[250px] rounded-xl border shadow">
          <div className="flex items-center justify-center h-full">
            <h1 className="text-2xl font-semibold">Merhaba</h1>
          </div>
        </div>
        <div className="bg-white h-[250px] rounded-xl border shadow">
          <div className="flex items-center justify-center h-full">
            <h1 className="text-2xl font-semibold">Merhaba</h1>
          </div>
        </div>
        <div className="bg-white  rounded-xl border row-span-4 col-span-3 shadow">
          <div className="flex items-center justify-center h-full">
            <h1 className="text-2xl font-semibold">Merhaba</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
