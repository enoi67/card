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

const route = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <NewTask />,
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
