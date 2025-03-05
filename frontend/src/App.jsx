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
import AdminJobs from "./components/admincomponent/AdminJobs";
import PostJob from "./components/admincomponent/PostJob";
import Applicants from "./components/admincomponent/Applicants";
import ProtectedRoute from "./components/admincomponent/ProtectedRoute";
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
      element: (
        <ProtectedRoute>
          <Companies />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/companies/create",
      element: (
        <ProtectedRoute>
          <CompanyCreate />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/companies/:id",
      element: (
        <ProtectedRoute>
          <CompanySetup />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/jobs",
      element: (
        <ProtectedRoute>
          <AdminJobs />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/jobs/create",
      element: (
        <ProtectedRoute>
          <PostJob />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/jobs/:id/applicants",
      element: (
        <ProtectedRoute>
          <Applicants />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default App;
