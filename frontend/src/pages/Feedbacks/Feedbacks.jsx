import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import Breadcrumb from "~/components/UI/Breadcrumb";
import Feedback from "./Feedback";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "~/redux/slices/contactSlice";
import { TbFileAlert } from "react-icons/tb";
import { IoAlert, IoAlertCircle, IoAlertCircleOutline } from "react-icons/io5";

const Feedbacks = () => {
  const { contacts } = useSelector((store) => store.contacts);
  const dispatch = useDispatch();

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
      <Breadcrumb
        title="Geri Bildirimler"
        Icon={HiOutlineChatBubbleLeftRight}
      />
      <div className="grid grid-cols-4 gap-5">
        {contacts.length > 0 ? (
          contacts.map((contact, i) => <Feedback key={i} contact={contact} />)
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

export default Feedbacks;
