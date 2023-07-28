import { Outlet } from "react-router-dom";
import MainHeader from "../Components/MainHeader/MainHeader";
import { UserProvider } from "../contexts/user.context";
import { ProductsProvider } from "../contexts/products.context";

export default function RootLayout() {
  return (
    <UserProvider>
      <ProductsProvider>
        <MainHeader />
        <Outlet />
      </ProductsProvider>
    </UserProvider>
  );
}
