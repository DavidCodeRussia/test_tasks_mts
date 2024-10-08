import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import FormGenerator from './components/formGenerator/ui/FormGenerator';
import GridDSL from './components/gridDSL/ui/GridDSL';
import Layout from "./components/layout/ui/Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} >
          <Route path="/" element={<FormGenerator />} />
          <Route path="task-2" element={<GridDSL />} />
      </Route>
    ))
  return (
    <RouterProvider router={router} />
  );
}

export default App;
