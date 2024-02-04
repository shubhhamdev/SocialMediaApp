import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import DetailPage from "./components/DetailPage";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/item/:id",
    element: <DetailPage />,
  },
]);
function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;
