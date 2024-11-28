import React from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { IoIosCloseCircleOutline } from "react-icons/io";

const FeedBackEditModal = ({ setIsModalOpen }) => {
  const modalRoot = document.getElementById("modal-root");

  const { register, handleSubmit } = useForm();

  const updateHandle = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
        <div className="w-full flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold ">Geribildirimi Düzenle</h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className=" text-red-600 p-2 rounded-full hover:bg-red-100 focus:outline-none transition-colors duration-200"
          >
            <IoIosCloseCircleOutline size={24} />
          </button>
        </div>
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(updateHandle)}
        >
          <input
            className="px-4 py-2 rounded-xl text-sm bg-white border outline-none"
            {...register("Name")}
          />
          <input
            className="px-4 py-2 rounded-xl text-sm bg-white border outline-none"
            {...register("Title")}
          />
          <input
            className="px-4 py-2 rounded-xl text-sm bg-white border outline-none"
            {...register("Content")}
          />
          <select
            className="px-4 py-2 rounded-xl text-sm bg-white border outline-none"
            {...register("Status")}
          >
            <option value="Bekleniyor">Bekleniyor</option>
            <option value="Tamamlandı">Tamamlandı</option>
            <option value="İptal Edildi">İptal Edildi</option>
          </select>
          <div className="flex justify-end mt-3">
            <button
              type="submit"
              className="text-sm bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white border-blue-600/25 px-3 py-1  rounded-md border"
            >
              Güncelle
            </button>
          </div>
        </form>
      </div>
    </div>,
    modalRoot
  );
};

export default FeedBackEditModal;
