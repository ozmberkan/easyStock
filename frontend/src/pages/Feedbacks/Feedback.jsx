import React, { useState } from "react";
import { TbUser, TbMessageMinus } from "react-icons/tb";

import { PiSubtitles } from "react-icons/pi";
import FeedBackEditModal from "~/components/UI/Modal/FeedBackEditModal";
import dayjs from "dayjs";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getAllContacts } from "~/redux/slices/contactSlice";
import { Link } from "react-router-dom";

const Feedback = ({ contact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5072/api/Contacts/${id}`);
      toast.success("Geri bildirim başarıyla silindi.");
      dispatch(getAllContacts());
    } catch (error) {
      console.log(error);
    }
  };

  const openEdit = (contact) => {
    setIsModalOpen(true);
    setSelectedContact(contact);
  };

  return (
    <>
      {isModalOpen && (
        <FeedBackEditModal
          setIsModalOpen={setIsModalOpen}
          selectedContact={selectedContact}
        />
      )}
      <div className="border p-3 rounded-xl">
        <div className="w-full flex justify-between items-center pb-4 border-b">
          <span className="rounded-full px-4 py-1 bg-orange-100 text-orange-500 border border-orange-500 text-xs">
            {contact?.status}
          </span>
          <span className="rounded-full px-4 py-1  text-xs">
            {dayjs(contact?.createdAt).format("DD.MM.YYYY HH:mm")}
          </span>
        </div>
        <div className="flex flex-col gap-2  pt-4 ">
          <h2 className="flex items-center gap-x-4">
            <TbUser size={15} />
            {contact?.name}
          </h2>
          <h1 className="flex items-center gap-x-4">
            <TbMessageMinus size={15} />
            {contact?.title}
          </h1>
          <p className="text-sm flex items-center gap-x-4">
            <span>
              <PiSubtitles size={15} />
            </span>
            {contact?.message.slice(0, 30)}...
          </p>
        </div>
        <div className="mt-3 border-t flex justify-center items-center gap-5 py-2">
          <Link
            to={`/feedback-detail/${contact.id}`}
            className="w-full flex justify-center items-center text-sm bg-green-100 text-green-500 border border-green-500 hover:bg-green-500 hover:text-white transition-colors px-4 py-1 rounded-md"
          >
            Detay
          </Link>
          <button
            onClick={() => openEdit(contact)}
            className="w-full text-sm bg-blue-100 text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors px-4 py-1 rounded-md"
          >
            Düzenle
          </button>
          <button
            onClick={() => handleDelete(contact.id)}
            className="w-full text-sm bg-red-100 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-colors px-4 py-1 rounded-md"
          >
            Sil
          </button>
        </div>
      </div>
    </>
  );
};

export default Feedback;
