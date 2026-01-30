export async function getAllMeals() {
  try {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s= ",
    );
    return res.json();
  } catch (error) {
    console.log(" error:", error);
  }
}
export async function getIngredientsMeals() {
  try {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
    );
    return res.json();
  } catch (error) {
    console.log(" error:", error);
  }
}

export async function getMealsCategory(mealcateg) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealcateg}`,
    );
    return res.json();
  } catch (error) {
    console.log(" error:", error);
  }
}
export async function getMealDeatils(mealId) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
    );
    return res.json();
  } catch (error) {
    console.log(" error:", error);
  }
}
