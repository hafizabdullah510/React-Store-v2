import {
  Home,
  About,
  Products,
  Cart,
  Error,
  HomeLayout,
  SingleProduct,
  Login,
  Orders,
} from "./pages";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ErrorElement from "./ui/ErrorElement";
import { useEffect } from "react";
import { updateCartTotals } from "./features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { SignedOut, SignedIn } from "@clerk/react-router";
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
      {
        path: "orders",
        element: <Orders />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <>
        <SignedOut>
          <Login />
        </SignedOut>
        <SignedIn>
          <Navigate to={"/"} replace />
        </SignedIn>
      </>
    ),
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
