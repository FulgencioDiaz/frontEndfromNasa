import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/Home";
import Landings from "../pages/Landings";
import Neas from "../pages/Neas";
import NeasList from "../pages/NeasList";


const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/neas",
        element: <Neas />,
      },
      {
        path: "/neas/list",
        element: <NeasList />,
      },
      {
        path: "/landings",
        element: <Landings />,
      },
    ],
  },
]);

export default router;
