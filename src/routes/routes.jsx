import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout/MainLayout";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Favorite from "../pages/Favorite/Favorite";
import NotFound from "../pages/NotFound/NotFound";
import Signup from "../pages/Register/Signup/Signup";
import SignIn from "../pages/Register/SignIn/SignIn";
import Jobs from "../pages/JOBS SECTOR/Jobs/Jobs";
import GetJobs from "../pages/JOBS SECTOR/GetJobs/GetJobs";
import PrivateRoute from "./PrivateRoute";
import DetailsJob from "../pages/JOBS SECTOR/DetailsJobs/DetailsJob";
import CreateJob from "../pages/JOBS SECTOR/CreateJobs/CReateJob";
import UpdateJob from "../pages/JOBS SECTOR/UpdateJob/UpdateJob";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
        // loader:(() => fetch('http://localhost:9000/jobs'))
      },
      {
        path: "/getjobs",
        element: <GetJobs />,
        // loader:(() => fetch('http://localhost:9000/jobs'))
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path:'detailsjob/:detailsJobId',
        element:<DetailsJob />,
        loader:({params}) => fetch(`http://localhost:9000/jobs/${params.detailsJobId}`)
      },
      {
        path:'/updatejob/:updateId',
        element:<UpdateJob />,
        loader:({params}) => fetch(`http://localhost:9000/jobs/${params.updateId}`)
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        // element: <Contact />
        element: (
          <PrivateRoute>
            <Contact/>
          </PrivateRoute>
        ),
      },
      {
        path: "/favorite",
        element: (
          <PrivateRoute>
            <Favorite />
          </PrivateRoute>
        ),
      },
      {
        path:'/createjob',
        element:<CreateJob />
      },
    ],
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
