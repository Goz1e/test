import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import HomePage from "./routes/homePage";
import Root from "./routes/root";
import Account from "./routes/account";
import Developer from "./routes/developer";
import Dashboard from "./routes/dashboard";
import PolicyEngine from "./routes/policy-engine";
import Settings from "./routes/settings";
import Signup from "./routes/signup";
import Login from "./routes/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "signup/",
    element: <Signup />,
  },
  {
    path: "login/",
    element: <Login />,
  },
  {
    // path: "app/",
    element: <Root />,
    children: [
      {
        // errorElement: <ErrorPage />,
        children: [
          // { index: true, element: <Index /> },
          {
            path: "accounts/",
            element: <Account />,
          },
          {
            path: "dev/",
            element: <Developer />,
          },
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "home/",
            index: true,
            element: <Dashboard />,
          },
          {
            path: "policy-engine/",
            element: <PolicyEngine />,
          },
          {
            path: "settings/",
            element: <Settings />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
