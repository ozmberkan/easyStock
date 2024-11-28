import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { TbUser } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "~/components/UI/Breadcrumb";
import { contacts, getAllContacts } from "~/redux/slices/contactSlice";
import MyFeedback from "../Feedbacks/MyFeedback";
import { IoAlertCircleOutline } from "react-icons/io5";

const MyAccount = () => {
  const dispatch = useDispatch();

  const { contacts } = useSelector((store) => store.contacts);

  useEffect(() => {
    dispatch(getAllContacts());
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 flex-grow h-full"
    >
      {/* Sayfa başlığı */}
      <Breadcrumb title="Profilim" Icon={TbUser} />
      <div className="grid grid-cols-3">
        {contacts?.length > 0 ? (
          contacts?.map((contact) => (
            <MyFeedback key={contact.id} contact={contact} />
          ))
        ) : (
          <div className="px-4 py-2 rounded-md bg-red-100 text-red-500 border border-red-500 text-sm flex items-center gap-x-2">
            <IoAlertCircleOutline />
            Herhangi bir geri bildirim bulunmamaktadır.
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MyAccount;
