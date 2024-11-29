import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumb from "~/components/UI/Breadcrumb";
import { getContactById } from "~/redux/slices/contactSlice";
import { BiMessageSquareDetail } from "react-icons/bi";
import { TbMessageMinus, TbUser } from "react-icons/tb";
import { PiSubtitles } from "react-icons/pi";

const FeedBackDetail = () => {
  const { id } = useParams();

  const { contact } = useSelector((state) => state.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactById(id));
  }, [dispatch, id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 flex-grow h-full"
    >
      <Breadcrumb title="Detay" Icon={BiMessageSquareDetail} />
      <div className="flex flex-col gap-2 pt-4 w-1/2">
        <h2 className="flex items-center gap-x-4">
          <TbUser size={15} />
          {contact?.name}
        </h2>
        <h1 className="flex items-center gap-x-4">
          <TbMessageMinus size={15} />
          {contact?.title}
        </h1>
      </div>
      <div className="bg-neutral-100 border border-neutral-300 rounded-lg p-4 shadow-md w-1/2">
        <div className="flex items-center gap-x-4 mb-2">
          <PiSubtitles size={20} />
          <h3 className="font-semibold text-lg">Sizin Mesajınz</h3>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed break-words">
          {contact?.message}
        </p>
      </div>
      {contact?.reply && (
        <div className="bg-zinc-100 border border-zinc-300 rounded-lg p-4 shadow-md w-1/2">
          <div className="flex items-center gap-x-4 mb-2">
            <PiSubtitles size={20} />
            <h3 className="font-semibold text-lg">Yönetici Yanıtı</h3>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed break-words">
            {contact?.message}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default FeedBackDetail;
