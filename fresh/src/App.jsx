import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Error from "./components/Error";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Collections from "./pages/Collections";
import Trends from "./pages/Trends";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "men",
          element: <Men />,
        },
        {
          path: "women",
          element: <Women />,
        },
        {
          path: "kids",
          element: <Kids />,
        },
        {
          path: "collections",
          element: <Collections />,
        },
        {
          path: "trends",
          element: <Trends />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
