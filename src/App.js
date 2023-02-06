import React from "react";
import "./App.css";
import Home from "./pages/Home";
import ShopAll from "./pages/ShopAll";
import MobilePhones from "./pages/MobilePhones";
import Tablets from "./pages/Tablets";
import Accessories from "./pages/Accesories";
import ContactUs from "./pages/ContactUs";
import ProductDetails from "./pages/ProductDetails";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/ErrorRoot";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Defining routes to be rendered
const router = createBrowserRouter([
  {
    //creating a wrapper so that Rootlayout is available on all children
    path: "/",
    element: <RootLayout />,
    //creating an error Element to display for invalid routes
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shopall", element: <ShopAll /> },
      { path: "/mobilephones", element: <MobilePhones /> },
      { path: "/tablets", element: <Tablets /> },
      { path: "/accessories", element: <Accessories /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/product/:productId", element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
