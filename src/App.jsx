import React from "react";
import "tailwindcss/tailwind.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Services from "./components/Services";
import ServicePage from "./pages/ServicePage";
import PricingPage from "./pages/PricingPage";
import Footer from "./components/Footer";
import Reduxpay from "./pages/Projects/Reduxpay";
import VenueOriginal from "./pages/Projects/VenueOriginal";
import Contact from "./pages/Contact";
import Skillgro from "./pages/Projects/Skillgro";
import Topfit from "./pages/Projects/Topfit";
import Piquant from "./pages/Projects/Piquant";
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
    // <div className="min-h-screen  bg-[#030014] text-white font-sans overflow-hidden">
    //   <div className=" max-w-[1540px] mx-auto">
    //     <BrowserRouter>
    //       <Header />
    //       <Routes>
    //         <Route path="/" element={<Homepage />} />
    //         <Route path="/service" element={<ServicePage />} />
    //         <Route path="/pricing" element={<PricingPage />} />
    //         <Route path="/contact" element={<Contact />} />
    //         <Route path="/projects/reduxpay" element={<Reduxpay />} />
    //         <Route path="/projects/venueoriginal" element={<VenueOriginal />} />
    //         <Route path="/projects/skillgro" element={<Skillgro />} />
    //         <Route path="/projects/topfit" element={<Topfit />} />
    //         <Route path="/projects/piquant" element={<Piquant />} />
    //         <Route path="/all-projects" element={<AllProjects />} />
    //         <Route path="/project/:id" element={<SingleProjectPage />} />
    //       </Routes>
    //     </BrowserRouter>

    //     <Footer />

    //   </div>
    // </div>
    <RouterProvider router={router} />
  );
};

export default App;
