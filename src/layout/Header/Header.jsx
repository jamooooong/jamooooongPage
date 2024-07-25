import { useState, useEffect } from "react";
import logoSvg from "../../assets/images/svg/logo.svg";
import menuSvg from "../../assets/images/svg/menu.svg";
import closeSvg from "../../assets/images/svg/close.svg";

const WINDOWSIZE = 660; // 660px(sm) 이상일 때

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= WINDOWSIZE) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // window size 확인
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="bg-gray-800 backdrop-blur-md">
        <div className="sm:w-3/5 place-self-center mx-auto">
          <nav className="mx-auto flex justify-between py-2 px-2">
            <div>
              <a href="./">
                <img className="h-8" src={logoSvg} alt="logo" />
              </a>
            </div>
            <div className="my-auto hidden sm:block text-white">
              <a href="./about" className="mx-4">
                About me
              </a>
              <a href="./skills" className="mx-4">
                Skills
              </a>
              <a href="./archiving" className="mx-4">
                Archiving
              </a>
              <a href="./project" className="mx-4">
                Project
              </a>
              <a href="./career" className="mx-4">
                Career
              </a>
            </div>

            <button
              className="block sm:hidden"
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
                About me
              </a>
              <a href="./skills" className="my-4">
                Skills
              </a>
              <a href="./archiving" className="my-4">
                Archiving
              </a>
              <a href="./project" className="my-4">
                Project
              </a>
              <a href="./career" className="my-4">
                Career
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
