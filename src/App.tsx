import {
  Home,
  About,
  Products,
  Cart,
  Error,
  HomeLayout,
  SingleProduct,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorElement from "./ui/ErrorElement";
import { useEffect } from "react";
import { updateCartTotals } from "./features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorElement />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <ErrorElement />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
      },
    ],
  },
]);
function App() {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state) => state.cart);
  useEffect(() => {
    dispatch(updateCartTotals());
  }, [cartItems]);
  return <RouterProvider router={router} />;
}

export default App;
