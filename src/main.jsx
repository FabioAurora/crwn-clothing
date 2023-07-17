import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import RootLayout from "./Routes/RootLayout";
import Shop from "./Routes/Shop";
import Home from "./Routes/Home";
import SignIn from "./Routes/Sign-in/Sign-in";

// The Root Route
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/sign-in',
        element:<SignIn />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
