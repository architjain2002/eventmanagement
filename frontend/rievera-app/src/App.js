import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { redirect } from "react-router-dom";
import './App.css';
import Signin from "./pages/Sigin/Signin";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import UserEvents from "./pages/UserEvents/UserEvents";

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Navigate to="/signIn"/>
    },

    {
      path: "/home",
      element:<Home/>,
    },

    {
      path: "/signUp",
      element:<SignUp/>
    },
    {
      path:"/signIn",
      element:<Signin/>
    },
    {
      path:"/registeredevents",
      element:<UserEvents />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
