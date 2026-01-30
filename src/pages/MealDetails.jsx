import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealDeatils } from "../services/meals";
import vidlogo from "../assets/vid.svg";
import srclogo from "../assets/srclogo.svg";

export default function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [ingredient, setIngredient] = useState([]);
  useEffect(() => {
    const fetchMeal = async () => {
      const data = await getMealDeatils(id);
      setMeal(data.meals[0]);
    };
    fetchMeal();
  }, []);
  useEffect(() => {
    const getIngredients = () => {
      const arr = Array.from({ length: 20 }, (_, i) => {
        const ingr = meal[`strIngredient${i + 1}`];
        const meas = meal[`strMeasure${i + 1}`];
        if (ingr && ingr.trim()) {
          return { ingr, meas };
        }
        return null;
      }).filter(Boolean);
      setIngredient(arr);
    };

    if (!meal) return;
    getIngredients();
  }, [meal]);
  return (
    <>
      {meal && (
        <div>
          <h1 className="font-bold text-5xl mb-5 font-pacifico">
            {meal.strMeal}
          </h1>
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="flex flex-col items-center gap-5">
              <div className="rounded-xl">
                <img
                  src={meal.strMealThumb}
                  alt="image-meal"
                  className="rounded-xl"
                />
              </div>
              <div className="flex">
                <button className="flex bg-red-500 px-5 py-2 font-bold text-white rounded-xl me-5">
                  <img
                    src={vidlogo}
                    alt="vid-logo"
                    className="inline-block me-2"
                  />
                  <a href={meal.strYoutube}>Youtube</a>
                </button>
                <button className="flex bg-green-500 px-5 py-2 font-bold text-white rounded-xl">
                  <img
                    src={srclogo}
                    alt="vid-logo"
                    className="inline-block me-2"
                  />
                  <a href={meal.strSource}>Source</a>
                </button>
              </div>
            </div>
            <p className=" font-bold">{meal.strInstructions}</p>
            <div className="p-5 bg-white  rounded-3xl">
              <h2 className=" font-cursive  text-2xl font-bold border-b-4 border-gray-300 pb-3">
                Ingredients
              </h2>

              {ingredient.map((ingr, index) => (
                <div
                  key={index}
                  className=" text-lg font-bold flex justify-between border-b-2 border-gray-300 py-3 "
                >
                  <p>{ingr.ingr} :</p>
                  <p>{ingr.meas}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
