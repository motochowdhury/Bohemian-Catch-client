import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Pages/Auth/Login";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails";
import Services from "../Pages/Services";
import ErrorPage from "../Pages/Shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
