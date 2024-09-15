import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function WebLayout() {
  return (
    <>
      <div className="sticky top-0 z-10">
        <Header />
      </div>
      <div className="mx-auto min-h-screen py-2">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
}
