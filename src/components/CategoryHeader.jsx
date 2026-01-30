import { useEffect, useState } from "react";
import { getAllCategory } from "../services/category";
import { NavLink, useNavigate } from "react-router-dom";

export default function CategoryHeader() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchGetAllCategory = async () => {
      const data = await getAllCategory();
      setCategories(data.meals);
    };
    fetchGetAllCategory();
  }, []);
  return (
    <>
      <h1 className="bg-linear-to-r from-[#F29724] to-[#c90519] bg-clip-text text-5xl font-pacifico text-transparent mb-4">
        Learn, Cook, Eat Your Food
      </h1>
      <select
        name="categories"
        id="categories"
        className="sm:hidden mb-4 w-full bg-white px-4 py-2 rounded-xl border border-gray-400"
        onChange={(e) => navigate(`/category/${e.target.value}`)}
      >
        {categories.map((categ) => (
          <option key={categ.strCategory} value={categ.strCategory}>
            {categ.strCategory}{" "}
          </option>
        ))}
      </select>
      <ul className="hidden sm:flex flex-wrap gap-6 gap-y-8 my-10">
        <li>
          <NavLink
            to={"/"}
            className="border border-gray-400 px-4 py-2 rounded-3xl"
          >
            All
          </NavLink>
        </li>
        {categories.map((categ) => (
          <li key={categ.strCategory}>
            <NavLink
              to={`/category/${categ.strCategory}`}
              className="border border-gray-400 px-4 py-2 rounded-3xl font-cursive"
            >
              {categ.strCategory}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
