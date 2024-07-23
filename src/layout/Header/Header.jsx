import { useState } from "react";

import logoSvg from "../../assets/images/svg/logo.svg";
import menuSvg from "../../assets/images/svg/menu.svg";
import closeSvg from "../../assets/images/svg/close.svg";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className=" bg-gray-800 backdrop-blur-md">
        <div className="">
          <nav className="mx-auto flex justify-between py-2 px-2">
            <div>
              <img className="h-8" src={logoSvg} alt="logo" />
            </div>
            <div className="my-auto hidden lg:block text-white">
              <a href="./about" className="mx-4">
                Portfolio
              </a>
              <a href="./about" className="mx-4">
                about
              </a>
              <a href="./about" className="mx-4">
                link
              </a>
            </div>
            <button className="my-auto hidden lg:block">
              <p className=" text-white">something</p>
            </button>
            <button
              className="block lg:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              {showMenu ? (
                <img className="h-8" src={closeSvg} alt="close" />
              ) : (
                <img className="h-8" src={menuSvg} alt="menu" />
              )}
            </button>
          </nav>
        </div>

        {showMenu && (
          <div className="flex flex-col w-full h-full bg-gray-800 p-2">
            <div className="flex flex-col text-white">
              <a href="./" className="my-4">
                Home
              </a>
              <a href="./about" className="my-4">
                Portfolio
              </a>
              <a href="./about" className="my-4">
                about
              </a>
              <a href="./about" className="my-4">
                link
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
