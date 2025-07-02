import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Products";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import { ProductsProvider } from "./contexts/ProductsContext";
import MeaningsBlog from "./components/MeaningsBlog";
import CareBlog from "./components/CareBlog";
import OccasionsBlog from "./components/OccasionsBlog";
import Cart from "./pages/Cart";
import { CartProvider } from "./contexts/CartContext";

// const router = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/login", element: <Login /> },
//   { path: "/cart", element: <Cart /> },
//   { path: "/products", element: <Product /> },
//   { path: "/blog/meanings", element: <MeaningsBlog /> },
//   { path: "/blog/care", element: <CareBlog /> },
//   { path: "/blog/occasions", element: <OccasionsBlog /> },
// ]);

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path={"/products"} element={<Product />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"*"} element={<NotFound />} />

            <Route path={"/blog"} element={<Blog />}>
              <Route path={"meanings"} element={<MeaningsBlog />} />
              <Route path={"care"} element={<CareBlog />} />
              <Route path={"occasions"} element={<OccasionsBlog />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
