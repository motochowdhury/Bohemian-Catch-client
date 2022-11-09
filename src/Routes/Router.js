import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddService from "../Pages/AddService";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import RequireAuth from "../Pages/Auth/RequireAuth";
import Home from "../Pages/Home/Home";
import MyReviews from "../Pages/MyReviews";
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
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/my-reviews",
        element: (
          <RequireAuth>
            <MyReviews />
          </RequireAuth>
        ),
      },
      {
        path: "/add-service",
        element: (
          <RequireAuth>
            <AddService />
          </RequireAuth>
        ),
      },
    ],
  },
]);

export default router;
