import { useEffect, useState } from "react";
import _ from "lodash";
import LogoImg from "../assets/logo.png";
import { navLinks } from "../data";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import ThemeSwitcher from "./helpers/ThemeSwitcher";

function MobileNavBar() {
  const [active, setActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);
  useEffect(() => {
    handleScrollTop();
    

    return () => {
      document.removeEventListener('scroll', handleScrollTop);
    }
    
    

  }, [scrollY])

  const handleScrollTop = _.debounce(() => {
    document.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      if (scrollTop > scrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setScrollY(scrollTop);
    })
  }, 200)

  return (
    <nav className="h-[70px]    lg:hidden sticky  left-0 right-0 top-0  z-10  ">
      {/* Logo + BarIcon */}
      <div style={{ display: showNav ? 'flex' : "none" }} className="   h-full shadow-myShadow dark:shadow-mydarkShaow dark:bg-dark bg-white  ">
        <div className="flex justify-between  container mx-auto px-8 md:px-0 
">
          <a href="#" className="flex items-center gap-4 ">
            <img className="max-h-[50px]" src={LogoImg} alt="Logo" />
            <h2 className="text-2xl font-bold  block">سوف أكاديمي</h2>
          </a>
          <div className=" flex">
          <ThemeSwitcher />

          <div className="flex items-center" >
            <span className="text-2xl text-secondary dark:text-darksecondary   cursor-pointer p-1 rounded-lg border dark:border-close-btn-bg " onClick={() => setActive(!active)}><FaBars/></span>
          </div>
          </div>
        </div> </div>
      {/* Overlay + NavBar */}
      <div

        className={`${active ? 'flex opacity-100 scale-100 ' : 'scale-0 opacity-0 pointer-events-none'} 
          transition-transform duration-500 ease-linear  
          px-4 sm:px-0 
          flex-col items-center justify-center absolute h-screen backdrop-blur-sm z-[20] cursor-pointer
          left-0 right-0 top-0 bottom-0 bg-overlay-bg/40 dark:bg-overlay-bg/80 `}
        onClick={() => setActive(false)}
      >
        <ul className="container  bg-navbar-bg dark:bg-dark border border-border-gray dark:border-close-btn-bg rounded-md px-4 pt-4 ">
          <button className="bg-close-btn-bg dark:bg-spdarkbg text-close-btn-text rounded-md flex justify-center items-center w-8 h-8 ms-auto mb-4">
            <IoClose size={22} />
          </button>
          {navLinks.map((link, index) => (
            <li key={index} >
              <a href={link.url} className={`${index !== navLinks.length - 1 ? "border-b" : ""} text-secondary dark:text-darksecondary p-4 block hover:text-black dark:hover:text-white dark:border-close-btn-bg `}  >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default MobileNavBar;
