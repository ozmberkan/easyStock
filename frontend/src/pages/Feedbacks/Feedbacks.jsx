import { motion } from "framer-motion";
import React from "react";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import Breadcrumb from "~/components/UI/Breadcrumb";
import Feedback from "./Feedback";

const Feedbacks = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 flex-grow h-full"
    >
      {/* Sayfa başlığı */}
      <Breadcrumb
        title="Geri Bildirimler"
        Icon={HiOutlineChatBubbleLeftRight}
      />
      <div className="grid grid-cols-4 gap-5">
        <Feedback />
        <Feedback />
        <Feedback />
        <Feedback />
      </div>
    </motion.div>
  );
};

export default Feedbacks;
