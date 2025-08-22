import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Products";
import Login from "./pages/Login";
import NotFound from "./ui/NotFound";
import { ProductsProvider } from "./contexts/ProductsContext";
import MeaningsBlog from "./ui/MeaningsBlog";
import CareBlog from "./ui/CareBlog";
import OccasionsBlog from "./ui/OccasionsBlog";
import Cart from "./pages/Cart";
import { CartProvider } from "./contexts/CartContext";
import AppLayout from "./AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/cart", element: <Cart /> },
      { path: "/products", element: <Product /> },
      {
        path: "/blog/meanings",
        element: <MeaningsBlog />,
      },
      { path: "/blog/care", element: <CareBlog /> },
      {
        path: "/blog/occasions",
        element: <OccasionsBlog />,
      },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <RouterProvider router={router} />
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
