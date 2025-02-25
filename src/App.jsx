import "tailwindcss/tailwind.css";
import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ServicePage from "./pages/ServicePage";
import PricingPage from "./pages/PricingPage";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";
import Features from "./pages/Features.jsx";


const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/service",
        element: <ServicePage />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/features",
        element: <Features />
      },
      {
        path: "/pricing",
        element: <PricingPage />
      },
    ]
  }
])
const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
