import axios from "axios";
import React from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TbAlertCircle } from "react-icons/tb";
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
      let imageUrl = selectedProduct.productImage;

      if (data.productImage && data.productImage.length > 0) {
        const file = data.productImage[0];

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "qlsmtlwm");
        formData.append("cloud_name", "dlzdj5p8p");

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/dlzdj5p8p/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (res.ok) {
          const uploadedImage = await res.json();
          imageUrl = uploadedImage.secure_url;
        }
      }

      const payload = {
        id: selectedProduct.id,
        productName: data.productName,
        productStock: data.productStock,
        productImage: imageUrl,
      };

      await axios.put(
        `http://localhost:5072/api/Products/${selectedProduct.id}`,
        payload
      );

      dispatch(getAllProducts());
      setEditMode(false);
      toast.success("Ürün başarıyla güncellendi.");
    } catch (error) {
      console.error("Güncelleme hatası:", error);
      toast.error("Ürün güncellenirken bir hata oluştu.");
    }
  };

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
        <div className="w-full flex justify-between items-center ">
          <h2 className="text-xl font-semibold ">Ürünü güncelle</h2>
          <button
            onClick={() => setEditMode(false)}
            className=" text-red-600 p-2 rounded-full hover:bg-red-100 focus:outline-none transition-colors duration-200"
          >
            <IoIosCloseCircleOutline size={24} />
          </button>
        </div>
        <div className="w-full  py-1 text-sm text-zinc-400 mb-3 flex items-center gap-x-1">
          <span className="text-blue-500">
            {" "}
            <TbAlertCircle />
          </span>
          Ürün bilgilerini güncellerken lütfen görseli yeniden yükleyiniz.
        </div>
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(updateHandle)}
        >
          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-500">Ürün Adı</label>
            <input
              className="px-4 py-2 rounded-xl text-sm bg-white border outline-none"
              {...register("productName")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-500">Ürün Stoğu</label>
            <input
              className="px-4 py-2 rounded-xl text-sm bg-white border outline-none"
              {...register("productStock")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-500">Ürün Görseli</label>
            <input
              type="file"
              className="px-4 py-2 rounded-xl text-sm bg-white border outline-none"
              {...register("productImage")}
            />
          </div>
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
