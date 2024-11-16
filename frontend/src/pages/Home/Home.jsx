import React from "react";
import { TbHome } from "react-icons/tb";
import Breadcrumb from "~/components/UI/Breadcrumb";

const Home = () => {
  return (
    <div>
      <Breadcrumb title="Anasayfa" Icon={TbHome} />
    </div>
  );
};

export default Home;
