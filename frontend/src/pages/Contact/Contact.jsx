import React from "react";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import Breadcrumb from "~/components/UI/Breadcrumb";

const Contact = () => {
  return (
    <div>
      {" "}
      <Breadcrumb title="İletişim" Icon={IoChatboxEllipsesOutline} />
    </div>
  );
};

export default Contact;
