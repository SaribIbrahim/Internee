import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Form from "./components/Form";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer/>
    </>
  );
}

export default App;
