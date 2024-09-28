import { useState, useEffect } from 'react';
import logoSvg from '../../assets/images/svg/logo.svg';
import RabbitLogo from '../../assets/images/svg/rabbit-logo.svg';
import menuSvg from '../../assets/images/svg/menu.svg';
import closeSvg from '../../assets/images/svg/close.svg';

const WINDOWSIZE = 660; // 660px(sm) 이상일 때

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= WINDOWSIZE) {
        setShowMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // window size 확인
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className=" bg-mainDarkGray text-white backdrop-blur-md text-sm">
        <div className="sm:w-3/5 place-self-center mx-auto">
          <nav className="mx-auto flex justify-between py-2 px-3">
            <div>
              {!showMenu && (
                <a href="./">
                  <img className="h-8" src={RabbitLogo} alt="logo" />
                </a>
              )}
            </div>
            <div className="my-auto hidden sm:block font-medium ">
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
          <div className="flex flex-col w-full h-full bg-gray-800 px-3 animate-growDown">
            <div className="flex flex-col text-white font-medium animate-fadeInDown mx-4">
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
              <a href="./career" className="mt-4 mb-8">
                Career
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
