import axios from "axios";
import React from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { getAllProducts } from "~/redux/slices/productSlice";

const EditModal = ({ selectedProduct, setEditMode }) => {
  const modalRoot = document.getElementById("modal-root");

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      productName: selectedProduct.productName,
      productStock: selectedProduct.productStock,
      productImage: selectedProduct.productImage,
    },
  });

  const updateHandle = async (data) => {
    try {
      const payload = {
        id: selectedProduct.id,
        productName: data.productName,
        productStock: data.productStock,
        productImage: data.productImage,
      };

      const response = await axios.put(
        `http://localhost:5072/api/Products/${selectedProduct.id}`,
        payload
      );

      console.log("Ürün başarıyla güncellendi:", response.data);
      dispatch(getAllProducts());
      setEditMode(false);
      toast.success("Ürün başarıyla güncellendi.");
    } catch (error) {
      console.error("Güncelleme hatası:", error);
    }
  };

  
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
        <div className="w-full flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold ">Ürünü güncelle</h2>
          <button
            onClick={() => setEditMode(false)}
            className=" text-red-600 p-2 rounded-full hover:bg-red-100 focus:outline-none transition-colors duration-200"
          >
            <IoIosCloseCircleOutline size={24} />
          </button>
        </div>
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(updateHandle)}
        >
          <input
            defaultValue={selectedProduct.productName}
            className="px-4 py-2 rounded-xl text-sm bg-white border outline-none"
            {...register("productName")}
          />
          <input
            defaultValue={selectedProduct.productStock}
            className="px-4 py-2 rounded-xl text-sm bg-white border outline-none"
            {...register("productStock")}
          />
          <input
            defaultValue={selectedProduct.productImage}
            className="px-4 py-2 rounded-xl text-sm bg-white border outline-none"
            {...register("productImage")}
          />
          <div className="flex justify-end mt-3">
            <button
              type="submit"
              className="text-sm bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white border-blue-600/25 px-3 py-1  rounded-md border"
            >
              Güncelle
            </button>
          </div>
        </form>
      </div>
    </div>,
    modalRoot
  );
};

export default EditModal;
