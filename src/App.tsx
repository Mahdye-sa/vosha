import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Products";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NotFound from "./ui/NotFound";

import MeaningsBlog from "./ui/MeaningsBlog";
import CareBlog from "./ui/CareBlog";
import OccasionsBlog from "./ui/OccasionsBlog";

import AppLayout from "./ui/AppLayout";
import getProducts from "./features/product/apiProduct";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import SuccessOrder from "./ui/SuccessOrder";
import OrderDetails, {
  loader as orderDetailsLoader,
} from "./features/order/OrderDetails";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", errorElement: <NotFound />, element: <Home /> },

      { path: "/cart", errorElement: <NotFound />, element: <Cart /> },
      {
        path: "/products",
        errorElement: <NotFound />,
        element: <Product />,
        loader: getProducts,
      },
      {
        path: "/blog/meanings",
        errorElement: <NotFound />,
        element: <MeaningsBlog />,
      },
      { path: "/blog/care", errorElement: <NotFound />, element: <CareBlog /> },
      {
        path: "/blog/occasions",
        errorElement: <NotFound />,
        element: <OccasionsBlog />,
      },
      {
        path: "/orders/:orderId",
        element: <OrderDetails />,
        errorElement: <NotFound />,
        loader: orderDetailsLoader,
      },
      {
        path: "/success/:orderId",
        element: <SuccessOrder />,
        errorElement: <NotFound />,
      },
    ],
  },
  { path: "/login", element: <Login />, errorElement: <NotFound /> },

  {
    path: "/order/new",
    element: <CreateOrder />,
    action: createOrderAction,
    errorElement: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
