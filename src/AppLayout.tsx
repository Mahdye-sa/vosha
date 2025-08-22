import { Outlet } from "react-router-dom";

import Footer from "./ui/Footer";
import Header from "./ui/Header";

function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
