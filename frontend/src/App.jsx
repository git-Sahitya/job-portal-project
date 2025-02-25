import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Home from "./components/components_lite/Home";
import PrivacyPolicy from "./components/components_lite/PrivacyPolicy";
import TermsOfService from "./components/components_lite/TermsofService";
import Jobs from "./components/components_lite/Jobs.jsx";
import Browse from "./components/components_lite/Browse";
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
    
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default App;
