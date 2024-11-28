import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { contactAddress, contactInputs, contactSocial } from "~/data/data";
import Breadcrumb from "~/components/UI/Breadcrumb";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "~/validations/scheme";
import toast from "react-hot-toast";
import { FaRegPaperPlane } from "react-icons/fa6";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const addContact = async (data) => {
    try {
      console.log("Gönderilen veriler:", data);
      toast.success("Mesajınız başarıyla gönderildi.");
      reset();
    } catch (error) {
      console.error("Mesaj gönderme hatası:", error);
      toast.error("Mesaj gönderilirken bir hata oluştu.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-4 flex-grow h-full"
    >
      {/* Sayfa başlığı */}
      <Breadcrumb title="İletişim" Icon={IoChatboxEllipsesOutline} />
      <div className="my-5">
        <h1 className="font-bold text-2xl">İletişime Geç</h1>
        <p className="text-zinc-400">
          Bize ulaşmak için aşağıdaki formu doldurun.
        </p>
      </div>

      {/* Form */}
      <form
        className="flex flex-col w-1/2 rounded-xl gap-5"
        onSubmit={handleSubmit(addContact)}
      >
        {contactInputs.map((input) => (
          <div key={input.name} className="flex flex-col gap-1">
            <label className="text-xs text-neutral-600 font-medium">
              {input.label}
            </label>
            {input.type === "textarea" ? (
              <textarea
                {...register(input.name)}
                className={`px-4 py-2 rounded-lg border outline-none ${
                  errors[input.name] ? "border-red-500" : "border-neutral-300"
                }`}
                placeholder={input.placeholder}
                rows={4}
              />
            ) : (
              <input
                {...register(input.name)}
                className={`px-4 py-2 rounded-lg border outline-none ${
                  errors[input.name] ? "border-red-500" : "border-neutral-300"
                }`}
                type={input.type}
                placeholder={input.placeholder}
              />
            )}
            {errors[input.name] && (
              <span className="text-red-500 text-xs">
                {errors[input.name].message}
              </span>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="px-4 py-2 flex items-center justify-center gap-x-2 rounded-md bg-neutral-500 text-white hover:bg-neutral-600 transition-colors"
        >
          <FaRegPaperPlane />
          Gönder
        </button>
      </form>

      {/* İletişim Bilgileri */}
      <div className="flex flex-col gap-6 mt-10">
        {contactAddress.map((address) => (
          <p key={address.id} className="flex gap-x-2 items-center">
            <span className="bg-white p-2 rounded border shadow-sm">
              <address.icon className="text-neutral-500" />
            </span>
            <span>{address.label}</span>
          </p>
        ))}
        <div className="flex gap-x-4">
          {contactSocial.map((social) => (
            <Link
              key={social.id}
              to={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-500 text-white p-2 rounded-md shadow hover:bg-neutral-600 transition"
            >
              <social.icon />
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
