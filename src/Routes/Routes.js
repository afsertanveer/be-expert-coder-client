import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import Main from './../layouts/Main';
import Home from './../Pages/Home/Home/Home';

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
      }
    ],
  },
]);
