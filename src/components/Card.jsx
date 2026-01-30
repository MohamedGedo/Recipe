import { FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Card({meal}) {
  return (
    <>
      <div
        className="bg-white  pb-4 pt-3 rounded-[40px] flex flex-col gap-2 items-center group hover:scale-105 hover:shadow-2xl duration-500"
      >
        <div className="w-9/12 -translate-y-12 rounded-full group-hover:rotate-360 duration-500 shadow-2xl">
          <img
            src={meal.strMealThumb || meal.strThumb}
            alt="img-meal"
            className="w-full rounded-full"
          />
        </div>
        <h2 className="font-bold text-xl">{meal.strMeal?.split(" ").slice(0, 2).join(" ") || meal.strIngredient}</h2>
        {meal.strArea ?
        <div className="flex justify-center items-center gap-2 text-emerald-700">
          <FaGlobeAmericas />
          <h3 className="font-bold text-xl text-center">{meal.strArea}</h3>
        </div>
        :''
        }
        <Link to={`/mealdetails/${meal.idMeal}`} className="text-white text-md bg-emerald-500 px-7 py-2 rounded-3xl font-bold hover:bg-emerald-700 hover:scale-105 duration-200">
          view Recipe
        </Link>
      </div>
    </>
  );
}
