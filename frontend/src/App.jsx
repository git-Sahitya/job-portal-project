import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Home from "./components/components_lite/Home";
import PrivacyPolicy from "./components/components_lite/PrivacyPolicy";
import TermsOfService from "./components/components_lite/TermsofService";
import Jobs from "./components/components_lite/Jobs.jsx";
import Browse from "./components/components_lite/Browse";
import Profile from "./components/components_lite/Profile";
import Description from "./components/components_lite/Description";
import Companies from "./components/admincomponent/Companies";
import CompanyCreate from "./components/admincomponent/CompanyCreate";
import CompanySetup from "./components/admincomponent/CompanySetup";
const App = () => {
  // create a router by using react-router-dom

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/description/:id",
      element: <Description />,
    },
    {
      path: "/PrivacyPolicy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/TermsofService",
      element: <TermsOfService />,
    },
    {
      path: "/Jobs",
      element: <Jobs />,
    },
    {
      path: "/Browse",
      element: <Browse />,
    },
    {
      path: "/Profile",
      element: <Profile />,
    },
    {
      path: "/Home",
      element: <Home />,
    },

    // admin
    {
      path: "/admin/companies",
      element: <Companies />,
    },
    {
      path: "/admin/companies/create",
      element: <CompanyCreate />,
    },
    {
      path: "/admin/companies/:id",
      element: <CompanySetup />,
    },
    
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default App;
