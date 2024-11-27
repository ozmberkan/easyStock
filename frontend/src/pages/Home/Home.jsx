import { useEffect } from "react";
import { BiBox } from "react-icons/bi";
import { TbAlertCircle, TbHome, TbUserSquareRounded } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "~/components/UI/Breadcrumb";
import Chart from "~/components/UI/Chart";
import { getAllProducts } from "~/redux/slices/productSlice";

const Home = () => {
  const { products } = useSelector((state) => state.products);

  console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="flex flex-col h-full">
      <Breadcrumb title="Anasayfa" Icon={TbHome} />
      <div className="w-full py-4 flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white h-[250px] rounded-xl border shadow overflow-hidden relative">
          <TbUserSquareRounded className="absolute rotate-12 opacity-15 text-[150px] md:text-[200px] lg:text-[250px] -top-6 md:-top-10 lg:-top-12 -right-6 md:-right-10 lg:-right-12 z-0" />
          <div className="flex items-start justify-start h-full p-5 flex-col gap-2 z-10">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold pb-2 border-b w-full">
              Hoş geldin
            </h1>
            <p className="text-sm md:text-base font-medium text-neutral-700">
              Bugün <span className="font-bold">{products.length}</span> ürün
              kontrolü var!
            </p>
          </div>
        </div>
        <div className="bg-white h-[250px] rounded-xl border shadow overflow-hidden relative">
          <BiBox className="absolute rotate-12 opacity-15 text-[150px] md:text-[200px] lg:text-[250px] -top-6 md:-top-10 lg:-top-12 -right-6 md:-right-10 lg:-right-12 z-0" />
          <div className="flex items-start justify-start h-full p-5 flex-col gap-2 z-10">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold pb-2 border-b w-full">
              Toplam Ürün Sayısı
            </h1>
            <p className="text-lg md:text-xl font-bold text-neutral-700">
              {products?.length}
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
                ?.filter((product) => product.ProductStock < 10)
                ?.map((product, index) => (
                  <span key={index}>{product.ProductName}</span>
                ))}
            </div>
          </div>
        </div>
        {/* Stok Sayıları Chart */}
        <div className="bg-white rounded-xl border shadow row-span-2 col-span-1 md:col-span-2 lg:col-span-3">
          <div className="h-full p-6">
            <h1 className="text-lg md:text-xl font-semibold pb-4">
              Stok Sayıları
            </h1>
            <Chart data={products} dataKey={"ProductStock"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
