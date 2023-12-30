import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout/MainLayout";
import Jobs from "../pages/Jobs/Jobs";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Favorite from "../pages/Favorite/Favorite";
import Signup from "../pages/Signup/Signup";
import NotFound from "../pages/NotFound/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path:'/',
            element: <Home />
        },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path:'/jobs',
        element:<Jobs />
      },
      {
        path:'/about',
        element: <About />
      },
      {
        path:'/contact',
        element: <Contact />
      },
      {
        path:'/favorite',
        element: <Favorite />
      },
    ],
  },
  {
    path:'signup',
    element: <Signup />
  },
  {
    path:'*',
    element: <NotFound />
  }
]);

export default routes;
