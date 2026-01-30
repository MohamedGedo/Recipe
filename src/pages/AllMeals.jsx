import  { useEffect, useState } from "react";
import { getAllMeals } from "../services/meals";
import Card from "../components/Card";

export default function Allmeals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const data = await getAllMeals();
      setMeals(data.meals);
    };

    fetchMeals();
  }, []);
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
