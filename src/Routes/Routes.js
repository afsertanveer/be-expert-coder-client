import { createBrowserRouter } from "react-router-dom";
import Courses from '../Pages/Courses/Courses/Courses';
import CoursesDetails from "../Pages/Courses/CoursesDetails/CoursesDetails";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Main from './../layouts/Main';
import Home from './../Pages/Home/Home/Home';
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/courses',
        loader:()=>fetch('https://be-expert-coder-server.vercel.app/courses'),
        element:<PrivateRoute><Courses></Courses></PrivateRoute>
      },
      {
        path:'/courses/:id',
        loader:({params})=>fetch(`https://be-expert-coder-server.vercel.app/courses/${params.id}`),
        element:<PrivateRoute><CoursesDetails></CoursesDetails></PrivateRoute>
      }
    ],
  },
]);
