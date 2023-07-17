import { Outlet } from "react-router-dom";
import MainHeader from "../Components/MainHeader/MainHeader";

export default function RootLayout() {
    return (
      <>
        <MainHeader />
        <Outlet />
      </>
    );
  }