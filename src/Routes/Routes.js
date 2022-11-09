import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Pages/Blogs/Blogs";
import Courses from '../Pages/Courses/Courses/Courses';
import CoursesDetails from "../Pages/Courses/CoursesDetails/CoursesDetails";
import FAQ from "../Pages/FAQ/FAQ";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Main from './../layouts/Main';
import CheckOut from './../Pages/CheckOut/CheckOut';
import Home from './../Pages/Home/Home/Home';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courses",
        loader: () =>
          fetch("https://be-expert-coder-server.vercel.app/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        loader: ({ params }) =>
          fetch(
            `https://be-expert-coder-server.vercel.app/courses/${params.id}`
          ),
        element: <CoursesDetails></CoursesDetails>,
      },
      {
        path: "/premium-access/:id",
        loader: ({ params }) =>
          fetch(
            `https://be-expert-coder-server.vercel.app/courses/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="text-danger text-center mt-5">
        <h1 className="font-bolder">404</h1>
        <h2 className="font-bolder">This route is not found!</h2>
      </div>
    ),
  },
]);
