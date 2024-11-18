import { TbUsers } from "react-icons/tb";
import Breadcrumb from "~/components/UI/Breadcrumb";

const About = () => {
  return (
    <div className="flex flex-col gap-4 flex-grow h-full">
      <Breadcrumb title="Hakkımızda" Icon={TbUsers} />

      <div className="w-full bg-white p-3 border rounded-md flex flex-col gap-3">
        <h1 className="font-semibold">Hakkımızda</h1>
        <p>
          easyStock, stok takibi yapmanızı sağlayan bir uygulamadır.
          Ürünlerinizi ekleyebilir, düzenleyebilir ve silebilirsiniz.
        </p>
      </div>
    </div>
  );
};

export default About;
