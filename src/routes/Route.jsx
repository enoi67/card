import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewTask from "../Body";
import M3 from "../Pages/Model3";
import MS from "../Pages/ModelS";
import MY from "../Pages/ModelY";
import MX from "../Pages/ModelX";
import Cybertruck from "../Pages/CyberTruck";
import Layout from "../Components/ui/Layout/Layout";
import UserProvider from "../Context/UserContext";
import BasketProvider from "../Context/basket";
import Post from "../Context/PostData";
import BasketPage from "../Pages/Bask";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import DynamicPage from "../Pages/DynamicPage";

const route = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: 'products/:id',
        element: <DynamicPage />
      },
      {
        path: "/modelS",
        element: <MS />,
      },
      {
        path: "/model3",
        element: <M3 />,
      },
      {
        path: "/modelY",
        element: <MY />,
      },
      {
        path: "/modelX",
        element: <MX />,
      },
      {
        path: "/Cybertruck",
        element: <Cybertruck />,
      },
      {
        path: "/AddData",
        element: <Post />,
      },
      {
        path: "/basket",
        element: <BasketPage />
      },
      {
        path: "*",
        element:<h1>Error</h1>
      }
    ],
  },
]);

const Routers = () => {
  return (
        <RouterProvider router={route} />
  );
};

export default Routers;
