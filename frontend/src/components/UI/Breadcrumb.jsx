import React from "react";
import Clock from "./Clock";

const Breadcrumb = ({ title, Icon }) => {
  return (
    <div className="  flex justify-between items-center">
      <div className="flex flex-row items-center gap-x-2 ">
        <span className="text-neutral-600 pr-2 border-r">
          <Icon size={20} />
        </span>
        <span className="text-sm text-neutral-500">{title}</span>
      </div>
      <Clock />
    </div>
  );
};

export default Breadcrumb;
