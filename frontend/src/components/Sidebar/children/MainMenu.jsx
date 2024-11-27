import { Link } from "react-router-dom";

const MainMenu = ({ label, linkTitles = [] }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-xs font-semibold text-neutral-800 mb-2 uppercase">
        {label}
      </h1>
      <ul className="text-sm flex flex-col gap-2">
        {linkTitles.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="py-2 px-2 rounded-md hover:bg-gray-100 border border-transparent hover:border-neutral-100 text-neutral-700 font-medium flex gap-x-2 items-center"
          >
            {link.icon && <link.icon size={20} />}
            {link.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MainMenu;
