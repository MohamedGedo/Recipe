import { useEffect, useState } from "react";

import Card from "../components/Card";
import { getIngredientsMeals } from "../services/meals";

export default function IngredientsMeals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const data = await getIngredientsMeals();
      setMeals(data.meals);
    };

    fetchMeals();
  }, []);
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15 mt-20">
        {meals.map((meal) => (
          <Card meal={meal} key={meal.idIngredient} />
        ))}
      </div>
    </>
  );
}
