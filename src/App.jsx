import "tailwindcss/tailwind.css";
import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ServicePage from "./pages/ServicePage";
import PricingPage from "./pages/PricingPage";
import Contact from "./pages/Contact";
import AllProjects from "./pages/AllProjects";
import SingleProjectPage from "./pages/SingleProjectPage";
import Layout from "./layout/Layout";


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
        path: "/pricing",
        element: <PricingPage />
      },
      {
        path: "/all-projects",
        element: <AllProjects />
      },
      {
        path: "/project/:clientName",
        element: <SingleProjectPage />
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
