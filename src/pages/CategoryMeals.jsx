import { useEffect, useState } from "react";
import { getMealsCategory } from "../services/meals";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

export default function CategoryMeals() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const data = await getMealsCategory(name);
      setMeals(data.meals);
    };

    fetchMeals();
  }, [name]);
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15 mt-20">
        {meals.map((meal) => (
          <Card meal={meal} key={meal.idMeal} />
        ))}
      </div>
    </>
  );
}
