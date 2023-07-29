import "@fontsource-variable/nunito-sans";
import "./App.css";
import { Navigate } from "react-router-dom";
import { Home } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Form } from "./components";
import { useContext, useEffect } from "react";
import { AuthContext } from "./provider/authProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: localStorage.getItem("token") ? <Home /> : <Navigate to="/auth" />,
  },
  {
    path: "/auth",
    element: !localStorage.getItem("token") ? <Form /> : <Navigate to="/" />,
  },
]);

function App() {
  const { auth } = useContext<any>(AuthContext);
  useEffect(() => {
    if (auth && location.pathname == "/auth") {
      window.location.replace("/");
    }
    if (!auth && location.pathname == "/") {
      window.location.replace("/auth");
    }
  }, [auth]);
  return <RouterProvider router={router} />;
}

export default App;
