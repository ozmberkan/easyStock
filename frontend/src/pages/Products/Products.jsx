import { useEffect, useState } from "react";
import { BiBox } from "react-icons/bi";
import { TbSortDescending, TbSortAscending } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { productsTableTitle } from "~/data/data";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import NoData from "~/components/NoData/NoData";
import Breadcrumb from "~/components/UI/Breadcrumb";
import orderBy from "lodash/orderBy";
import { getAllProducts } from "~/redux/slices/productSlice";
import axios from "axios";
import EditModal from "~/components/UI/Modal/EditModal";
import toast from "react-hot-toast";

const Products = () => {
  const { products } = useSelector((state) => state.products);

  const [editMode, setEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction });
  };

  const sortedProducts = orderBy(
    products,
    [sortConfig.key],
    [sortConfig.direction]
  );

  const openEdit = (product) => {
    setEditMode(true);
    setSelectedProduct(product);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5072/api/Products/${id}`);
      dispatch(getAllProducts());
      toast.success("Ürün başarıyla silindi.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {editMode && (
        <EditModal
          setEditMode={setEditMode}
          selectedProduct={selectedProduct}
        />
      )}
      <div className="w-full h-full  ">
        {products?.length > 0 && <Breadcrumb title="Ürünler" Icon={BiBox} />}
        {sortedProducts?.length > 0 ? (
          <div className="flex flex-col py-4">
            <div className="overflow-x-auto">
              <div className="lg:min-w-full min-w-3/4 inline-block align-middle">
                <div className="border border-gray-300 rounded-lg shadow overflow-hidden dark:border-neutral-700">
                  <table className="min-w-full bg-white divide-y divide-gray-200 dark:bg-neutral-800 dark:divide-neutral-700">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-neutral-700">
                        {productsTableTitle.map((title) => (
                          <th
                            key={title.id}
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400 cursor-pointer select-none"
                            onClick={() =>
                              title.sortable && handleSort(title.key)
                            }
                          >
                            <div className="flex items-center gap-2">
                              {title.title}
                              {title.sortable && (
                                <>
                                  {sortConfig.key === title.key ? (
                                    sortConfig.direction === "asc" ? (
                                      <TbSortAscending size={16} />
                                    ) : (
                                      <TbSortDescending size={16} />
                                    )
                                  ) : (
                                    <TbSortDescending
                                      size={16}
                                      className="opacity-50"
                                    />
                                  )}
                                </>
                              )}
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                      {sortedProducts.map((product) => (
                        <tr
                          key={product.id}
                          className="hover:bg-gray-50 dark:hover:bg-neutral-600 transition"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                            {product.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            <img
                              src={product.productImage}
                              alt={product.productImage}
                              className="h-16 w-16 rounded object-cover"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {product.productName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 ">
                            {product.productStock}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium space-y-2 ">
                            <button
                              type="button"
                              onClick={() => openEdit(product)}
                              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-neutral-100 border border-neutral-300 text-neutral-600  rounded-full shadow-md hover:bg-neutral-200  transition focus:outline-none focus:ring-2 focus:ring-neutral-400"
                            >
                              <FaEdit className="text-neutral-600" />
                              Düzenle
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDelete(product.id)}
                              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-red-100 border border-red-300 text-red-600 rounded-full shadow-md hover:bg-red-200 transition focus:outline-none focus:ring-2 focus:ring-red-400"
                            >
                              <FaTrashAlt className="text-red-600" />
                              Sil
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-96">
            <NoData />
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
