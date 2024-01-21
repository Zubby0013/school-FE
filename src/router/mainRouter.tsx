import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../components/Layout/AuthLayout";
import SignIn from "../page/auth/SignIn";
import RegisterCard from "../page/auth/RegisterCard";
import Layout from "../components/Layout/Layout";
import Register from "../page/auth/Register";
import HomeScreen from "../page/Home/HomeScreen";

export const mainRouter = createBrowserRouter([
   {
    path: "/auth",
    element: <AuthLayout/>,
    children: [
      {
        index: true,
        element: <Register/>
      },
      {
        index: true,
        path: "signin/:token",
        element: <SignIn/>
      },
      {
        index: true,
        path: "register-message",
        element: <RegisterCard/>
      }
    ]
   },
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <HomeScreen/>
      }
    ]
  }
]);
