import { Outlet } from "react-router-dom";
import MainHeader from "../Components/MainHeader/MainHeader";
import { UserProvider } from "../contexts/user.context";

export default function RootLayout() {
  return (
    <UserProvider>
      <MainHeader />
      <Outlet />
    </UserProvider>
  );
}
