import React from "react";
import { TbUser } from "react-icons/tb";
import Breadcrumb from "~/components/UI/Breadcrumb";

const Profile = () => {
  return (
    <div>
      <Breadcrumb title="Profilim" Icon={TbUser} />
    </div>
  );
};

export default Profile;
