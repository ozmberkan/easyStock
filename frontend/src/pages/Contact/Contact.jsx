import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { contactAddress, contactInputs, contactSocial } from "~/data/data";
import Breadcrumb from "~/components/UI/Breadcrumb";

const Contact = () => {
  return (
    <div className="flex flex-col gap-4 flex-grow h-full">
      <Breadcrumb title="İletişim" Icon={IoChatboxEllipsesOutline} />
      <h1 className="font-semibold text-2xl text-neutral-700">İletişime geç</h1>
      <div className="flex flex-grow w-full lg:flex-row flex-col items-center gap-7">
        <div className="flex-grow h-full flex justify-start items-start lg:border-r lg:pr-24  ">
          <form className="w-full flex flex-col gap-5">
            {contactInputs.map((input, i) => {
              return input.type === "textarea" ? (
                <div key={i} className="flex flex-col gap-y-1">
                  <h2 className="text-sm text-neutral-600">{input.label}</h2>
                  <div className="flex items-center gap-x-1 rounded-lg border min-h-44 max-h-44 ">
                    <textarea
                      className="min-h-44 border max-h-44  w-full bg-white rounded-lg text-sm p-3 outline-none"
                      placeholder={input.placeholder}
                      type={input.type}
                    />
                  </div>
                </div>
              ) : (
                <div key={input.id} className="flex flex-col gap-y-1">
                  <h2 className="text-sm text-neutral-600">{input.label}</h2>
                  <div className="flex items-center bg-white gap-x-1 rounded-lg border h-10 px-4">
                    <label>
                      {input.Icon && (
                        <input.Icon className="text-neutral-500" />
                      )}
                    </label>
                    <input
                      className="h-full bg-transparent outline-none pl-2 w-full text-sm"
                      placeholder={input.placeholder}
                      type={input.type}
                    />
                  </div>
                </div>
              );
            })}
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-neutral-500 text-white hover:bg-neutral-600 transition-colors"
            >
              Gönder
            </button>
          </form>
        </div>

        <div className="flex-grow h-full flex flex-col gap-y-6 justify-start items-start">
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
      </div>
    </div>
  );
};

export default Contact;
