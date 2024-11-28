import { motion } from "framer-motion";
import React from "react";
import { TbUser } from "react-icons/tb";
import Breadcrumb from "~/components/UI/Breadcrumb";

const MyAccount = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 flex-grow h-full"
    >
      {/* Sayfa başlığı */}
      <Breadcrumb title="Profilim" Icon={TbUser} />
      MyAccount
    </motion.div>
  );
};

export default MyAccount;
