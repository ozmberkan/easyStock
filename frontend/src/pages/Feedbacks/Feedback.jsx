import React, { useState } from "react";
import { TbUser, TbMessageMinus } from "react-icons/tb";

import { PiSubtitles } from "react-icons/pi";
import FeedBackEditModal from "~/components/UI/Modal/FeedBackEditModal";

const Feedback = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && <FeedBackEditModal setIsModalOpen={setIsModalOpen} />}
      <div className="border p-3 rounded-xl">
        <div className="w-full flex justify-between items-center pb-4 border-b">
          <span className="rounded-full px-4 py-1 bg-orange-100 text-orange-500 border border-orange-500 text-xs">
            Bekleniyor
          </span>
          <span className="rounded-full px-4 py-1  text-xs">28.11.2024</span>
        </div>
        <div className="flex flex-col gap-2  pt-4 ">
          <span className="flex items-center gap-x-4">
            <span>
              <TbUser size={15} />
            </span>
            Muhammed Berkan Özmen
          </span>
          <h1 className="flex items-center gap-x-4">
            <span>
              {" "}
              <TbMessageMinus size={15} />
            </span>
            Başlık
          </h1>
          <p className="text-sm flex items-center gap-x-4">
            <div>
              <PiSubtitles size={15} />
            </div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            corrupti non id excepturi, consequatur ipsum impedit pariatur
            aliquid similique, quos obcaecati sed adipisci! Voluptate,
            cumque?...
          </p>
        </div>
        <div className="mt-3 border-t flex justify-center items-center gap-5 py-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full text-sm bg-blue-100 text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors px-4 py-1 rounded-md"
          >
            Düzenle
          </button>
          <button className="w-full text-sm bg-red-100 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-colors px-4 py-1 rounded-md">
            Sil
          </button>
        </div>
      </div>
    </>
  );
};

export default Feedback;
