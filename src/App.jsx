import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryMeals from "./pages/CategoryMeals";
import CategoryLayout from "./pages/CategoryLayout";
import Allmeals from "./pages/AllMeals";
import MealDetails from "./pages/MealDetails";
import IngredientsMeals from "./pages/IngredientsMeals";
import Layout from './Layout';

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <CategoryLayout />,
          children: [
            { index: true, element: <Allmeals /> },
            {path:'/ingredients' ,element:<IngredientsMeals/>            },
            { path: "/category/:name", element: <CategoryMeals /> },
          ],
        },
        { path: "mealDetails/:id", element: <MealDetails /> },
      ],
    },
  ]);
  return <>
  <RouterProvider router={routes}></RouterProvider>
  </>;
}
