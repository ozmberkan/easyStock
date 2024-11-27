import React from "react";
import { useForm } from "react-hook-form";
import { BsDatabaseAdd } from "react-icons/bs";
import Breadcrumb from "~/components/UI/Breadcrumb";
import { addProductInputs } from "~/data/data";
import { addScheme } from "~/validations/scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";

const Add = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addScheme),
  });

  const addHandle = async (data) => {
    try {
      await axios.post("http://localhost:5072/api/Products", data);
      toast.success("Ürün başarıyla eklendi.");
      reset();
    } catch (error) {
      console.error("Ürün ekleme sırasında hata oluştu:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 flex-grow h-full">
      {/* Sayfa başlığı */}
      <Breadcrumb title="Ürün Ekle" Icon={BsDatabaseAdd} />
      <div className="my-5">
        <h1 className="font-bold text-2xl">Ürün Ekle</h1>
        <p className="text-zinc-400">
          Ürün eklemek için aşağıdaki formu kullanabilirsiniz.
        </p>
      </div>

      {/* Form */}
      <form
        className="flex flex-col w-1/2 rounded-xl gap-5"
        onSubmit={handleSubmit(addHandle)}
      >
        {addProductInputs.map((input) => (
          <div key={input.id} className="flex flex-col gap-1">
            <label className="text-xs text-neutral-600 font-medium">
              {input.label}
            </label>
            <input
              {...register(input.name, { required: true })}
              className={`px-4 py-2 rounded-lg border outline-none ${
                errors[input.name] ? "border-red-500" : "border-neutral-300"
              }`}
              type={input.type}
              placeholder={input.placeholder}
            />
            {errors[input.name] && (
              <span className="text-red-500 text-xs">
                {errors[input.name].message}
              </span>
            )}
          </div>
        ))}
        <button
          type="submit"
          className={`px-4 py-2 rounded-md text-black transition-colors `}
        >
          Oluştur
        </button>
      </form>
    </div>
  );
};

export default Add;
