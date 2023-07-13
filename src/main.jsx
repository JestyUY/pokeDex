import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { PokeCard } from "./Components/pokeCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/:id", element: <PokeCard /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
