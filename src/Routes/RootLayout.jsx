import { Outlet } from "react-router-dom";
import MainHeader from "../Components/MainHeader/MainHeader";
import { UserProvider } from "../contexts/user.context";
import { ProductsProvider } from "../contexts/products.context";
import { CartProvider } from '../contexts/cart.context';

export default function RootLayout() {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <MainHeader />
          <Outlet />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
}
