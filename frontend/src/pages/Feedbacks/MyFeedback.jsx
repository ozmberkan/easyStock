import classNames from "classnames";
import dayjs from "dayjs";
import React from "react";
import { PiSubtitles } from "react-icons/pi";
import { TbMessageMinus, TbUser } from "react-icons/tb";
import { Link } from "react-router-dom";

const MyFeedback = ({ contact }) => {
  return (
    <div className="border p-3 rounded-xl">
      <div className="w-full flex justify-between items-center pb-4 border-b">
        <span
          className={classNames("rounded-full px-4 py-1 text-xs border", {
            "bg-orange-100 text-orange-500 border-orange-500":
              contact?.status === "pending",
            "bg-green-100 text-green-500 border-green-500":
              contact?.status === "succeeded",
            "bg-red-100 text-red-500 border-red-500":
              contact?.status === "deleted",
          })}
        >
          {contact?.status === "pending" && "Beklemede"}
          {contact?.status === "succeeded" && "Tamamlandı"}
          {contact?.status === "deleted" && "İptal Edildi"}
        </span>
        <span className="rounded-full px-4 py-1 text-xs">
          {dayjs(contact?.createdAt).format("DD.MM.YYYY HH:mm")}
        </span>
      </div>
      <div className="flex flex-col gap-2 pt-4">
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
          className={classNames(
            "w-full flex justify-center items-center text-sm px-4 py-1 rounded-md transition-colors",
            "bg-green-100 text-green-500 border border-green-500 hover:bg-green-500 hover:text-white"
          )}
        >
          Detay
        </Link>
      </div>
    </div>
  );
};

export default MyFeedback;
