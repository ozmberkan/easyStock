import axios from "axios";
import React from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { getAllContacts } from "~/redux/slices/contactSlice";

const FeedBackEditModal = ({ setIsModalOpen, selectedContact }) => {
  const modalRoot = document.getElementById("modal-root");

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      Name: selectedContact?.name,
      Title: selectedContact?.title,
      Message: selectedContact?.message,
      Status: selectedContact?.status,
      Reply: selectedContact?.reply,
    },
  });

  const updateHandle = async (data) => {
    try {
      const payload = {
        id: selectedContact.id,
        Name: data.Name,
        Title: data.Title,
        Message: data.Message,
        Status: data.Status,
        Reply: data.Reply,
      };

      await axios.put(
        `http://localhost:5072/api/Contacts/${selectedContact.id}`,
        payload
      );

      dispatch(getAllContacts());
      setIsModalOpen(false);
      toast.success("Geri bildirim başarıyla güncellendi.");
    } catch (error) {
      console.error("Güncelleme hatası:", error);
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
          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-500">Ad Soyad</label>
            <input
              className="px-4 py-2 rounded-xl text-sm bg-white border outline-none"
              {...register("Name")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-500">Başlık</label>
            <input
              className="px-4 py-2 rounded-xl text-sm bg-white border outline-none"
              {...register("Title")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-500">Mesaj İçeriği</label>
            <input
              className="px-4 py-2 rounded-xl text-sm bg-white border outline-none"
              {...register("Message")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-500">Mesaj Yanıtı</label>
            <input
              className="px-4 py-2 rounded-xl text-sm bg-white border outline-none"
              {...register("Reply")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-500">Mesaj Durumu</label>
            <select
              className="px-4 py-2 rounded-xl text-sm bg-white border outline-none"
              {...register("Status")}
            >
              <option value="pending">Beklemede</option>
              <option value="succeeded">Tamamlandı</option>
              <option value="deleted">İptal Edildi</option>
            </select>
            <div className="flex justify-end mt-3"></div>
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
