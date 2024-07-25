import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function WebLayout() {
  return (
    <>
      <div className="sticky">
        <Header />
      </div>
      <div className="sm:w-3/5 mx-auto min-h-screen">
        <Outlet />
      </div>
      <div className="sm:w-3/5 mx-auto">
        <Footer />
      </div>
    </>
  );
}
