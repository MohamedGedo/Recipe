import logo from "../assets/logo.png";
import dish from "../assets/dish.svg";
import whdish from "../assets/whdish.svg";
import menu from "../assets/menu.svg";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      <div className=" py-5 px-3 bg-gray-200 md:hidden">
        <img
          src={menu}
          alt="menu"
          className="w-8 cursor-pointer "
          onClick={() => setIsOpen(true)}
        />
      </div>
      <div
        className={`pt-6 px-3 fixed inset-y-0 left-0 bg-white w-70  ${isOpen ? "translate-x-0" : "-translate-x-100"} duration-300 sm:translate-x-0`}
      >
        <div>
          <img src={logo} alt="logo" className="w-full" />
        </div>
        <ul className="flex flex-col gap-3">
          <li>
            <Link
              to={"/"}
              className="flex gap-2 bg-orange-400 text-white shadow-2xs shadow-orange-400 text-xl font-mono px-3 py-2 rounded-xl hover:scale-105"
            >
              {" "}
              <img src={whdish} alt="dish" />
              Meals
            </Link>
          </li>
          <li>
            <Link
              to={'/ingredients'}
              className="flex gap-2  text-xl font-mono px-3 py-2 rounded-xl border border-gray-400 hover:scale-105"
            >
              {" "}
              <img src={dish} alt="dish" />
              Ingredients
            </Link>
          </li>
          <li>
            <Link
              to={'/'}
              className="flex gap-2  text-xl font-mono px-3 py-2 rounded-xl border border-gray-400  hover:scale-105"
            >
              {" "}
              <img src={dish} alt="dish" />
              Area
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
