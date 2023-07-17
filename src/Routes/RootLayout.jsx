import { Outlet } from "react-router-dom";
import MainHeader from "../Components/MainHeader";
import './RootLayout.styles.scss';

export default function RootLayout() {
    return (
      <>
        <MainHeader />
        <Outlet />
      </>
    );
  }