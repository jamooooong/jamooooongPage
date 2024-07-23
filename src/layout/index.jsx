import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function WebLayout() {
  return (
    <>
      <div className="sticky">
        <Header />
      </div>
      <div className=" max-h-min">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
