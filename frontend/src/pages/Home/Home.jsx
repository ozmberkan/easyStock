import { BiBox } from "react-icons/bi";
import { TbAlertCircle, TbHome, TbUserSquareRounded } from "react-icons/tb";
import { useSelector } from "react-redux";
import Breadcrumb from "~/components/UI/Breadcrumb";
import Chart from "~/components/UI/Chart";

const Home = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="flex flex-col h-full">
      <Breadcrumb title="Anasayfa" Icon={TbHome} />
      <div className="w-full py-4 flex-grow grid grid-cols-3 grid-rows-3 gap-3">
        <div className="bg-white h-[250px] rounded-xl border shadow overflow-hidden relative">
          <TbUserSquareRounded className="absolute rotate-12 opacity-15 text-[250px] -top-12 -right-12 z-0" />
          <div className="flex items-start justify-start h-full p-5 flex-col gap-2 z-10">
            <h1 className="text-2xl font-semibold pb-2 border-b w-full">
              Hoş geldin
            </h1>
            <p className="text-sm font-medium text-neutral-700">
              Bugün yapman gereken{" "}
              <span className="font-bold">
                {Math.floor(Math.random() * 10)}
              </span>{" "}
              ürün kontrolü var!
            </p>
          </div>
        </div>
        <div className="bg-white h-[250px] rounded-xl border shadow overflow-hidden relative">
          <BiBox className="absolute rotate-12 opacity-15 text-[250px] -top-12 -right-12 z-0" />
          <div className="flex items-start justify-start h-full p-5 flex-col gap-2 z-10">
            <h1 className="text-2xl font-semibold pb-2 border-b w-full">
              Toplam Ürün Sayısı
            </h1>
            <p className="text-lg font-bold text-neutral-700">
              {products.length}
            </p>
          </div>
        </div>
        <div className="bg-white h-[250px] rounded-xl border shadow overflow-hidden relative">
          <TbAlertCircle className="absolute rotate-12 opacity-15 text-[250px] -top-12 -right-12 z-0" />
          <div className="flex items-start justify-start h-full p-5 flex-col gap-2 z-10">
            <h1 className="text-2xl font-semibold pb-2 border-b w-full">
              Düşük Stok Ürünleri
            </h1>
            <div className="text-sm font-medium text-neutral-700 flex flex-col w-full h-full overflow-auto gap-1">
              {products
                .filter((product) => product.stock < 10)
                .map((product, index) => (
                  <span key={index}>{product.name}</span>
                ))}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border row-span-4 col-span-3 shadow">
          <div className="h-full p-6">
            <h1 className="text-xl font-semibold pb-4">Stok Sayıları</h1>
            <Chart data={products} dataKey={"stock"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
