import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Photographer from "./pages/Photographer";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Photographer />,
  },
]);


const App = () => {
  return <RouterProvider router={router} />
};

export default App;