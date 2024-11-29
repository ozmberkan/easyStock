import { motion } from "framer-motion";
import { useEffect } from "react";
import { BiBox } from "react-icons/bi";
import { TbAlertCircle, TbHome, TbUserSquareRounded } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumb from "~/components/UI/Breadcrumb";
import Chart from "~/components/UI/Chart";
import { getAllContacts } from "~/redux/slices/contactSlice";
import { getAllProducts } from "~/redux/slices/productSlice";

const Home = () => {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllContacts());
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col h-full"
    >
      <Breadcrumb title="Anasayfa" Icon={TbHome} />
      <div className="w-full py-4 flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white h-[250px] rounded-xl border shadow overflow-hidden relative">
          <TbUserSquareRounded className="absolute rotate-12 opacity-15 text-[150px] md:text-[200px] lg:text-[250px] -top-6 md:-top-10 lg:-top-12 -right-6 md:-right-10 lg:-right-12 z-0" />
          <div className="flex items-start justify-start h-full p-5 flex-col gap-2 z-10">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold pb-2 border-b w-full">
              Hoş geldin
            </h1>
            <p className="text-sm md:text-base font-medium text-neutral-700">
              Muhammed Berkan Özmen
            </p>
            <p className="text-xs md:text-xs font-medium text-neutral-700">
              ozmberkan@gmail.com
            </p>
            <Link
              to="/my-account"
              className="px-4 py-2 rounded-md bg-neutral-100 border text-neutral-600 mt-3"
            >
              Profilim
            </Link>
          </div>
        </div>
        <div className="bg-white h-[250px] rounded-xl border shadow overflow-hidden relative">
          <BiBox className="absolute rotate-12 opacity-15 text-[150px] md:text-[200px] lg:text-[250px] -top-6 md:-top-10 lg:-top-12 -right-6 md:-right-10 lg:-right-12 z-0" />
          <div className="flex items-start justify-start h-full p-5 flex-col gap-2 z-10">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold pb-2 border-b w-full">
              Toplam Ürün Çeşidi
            </h1>
            <p className="text-lg md:text-xl font-bold text-neutral-700">
              {products?.length}{" "}
              <span className="font-normal">farklı ürün</span>
            </p>
          </div>
        </div>
        <div className="bg-white h-[250px] rounded-xl border shadow overflow-hidden relative">
          <TbAlertCircle className="absolute rotate-12 opacity-15 text-[150px] md:text-[200px] lg:text-[250px] -top-6 md:-top-10 lg:-top-12 -right-6 md:-right-10 lg:-right-12 z-0" />
          <div className="flex items-start justify-start h-full p-5 flex-col gap-2 z-10">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold pb-2 border-b w-full">
              Düşük Stok Ürünleri {`< 10`}
            </h1>
            <div className="text-sm md:text-base font-medium text-neutral-700 flex flex-col w-full h-full overflow-auto gap-1">
              {products
                ?.filter((product) => product.productStock < 10)
                ?.map((product, index) => (
                  <span key={index}>
                    • {product.productName} - {product.productStock} Adet
                  </span>
                ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border shadow row-span-2 col-span-1 md:col-span-2 lg:col-span-3">
          <div className="h-full p-6">
            <h1 className="text-lg md:text-xl font-semibold pb-4">
              Stok Sayıları
            </h1>
            <Chart data={products} dataKey={"productStock"} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
