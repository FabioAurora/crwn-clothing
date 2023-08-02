import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import RootLayout from "./Routes/RootLayout";
import Shop from "./Routes/Shop/Shop";
import Home from "./Routes/Home";
import Authentication from "./Routes/Authentication/Authentication";
import Checkout from "./Routes/Checkout/Checkout";

// The Root Route
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/auth",
        element: <Authentication />,
      },
      {
        path: "/checkout",
        element: <Checkout />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
