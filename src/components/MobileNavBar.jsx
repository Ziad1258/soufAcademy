import { useEffect, useState } from "react";
import _ from "lodash";
import LogoImg from "../assets/logo.png";
import { navLinks } from "../data";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

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
    <nav className="h-[70px]    md:hidden sticky  left-0 right-0 top-0  z-10  ">
      {/* Logo + BarIcon */}
      <div style={{ display: showNav ? "flex" : "none" }} className="   h-full shadow-md bg-white ">
        <div className="flex justify-between  container mx-auto px-8 md:px-0 
">
          <div className="flex items-center gap-4  h-full">
            <img className="max-h-[50px]" src={LogoImg} alt="Logo" />
            <h2 className="text-2xl font-bold  block">سوف أكاديمي</h2>
          </div>
          <div className=" flex">
          <button className="" onClick={() => setActive(!active)}>
            <FaBars size={22} />
          </button>
          </div>
        </div> </div>
      {/* Overlay + NavBar */}
      <div

        className={`${active ? 'flex opacity-100 scale-100 ' : 'scale-0 opacity-0 pointer-events-none'} 
          transition-transform duration-500 ease-linear  
          px-4 sm:px-0 
          flex-col items-center justify-center absolute h-screen backdrop-blur-sm z-[20] cursor-pointer
          left-0 right-0 top-0 bottom-0 bg-overlay-bg/60`}
        onClick={() => setActive(false)}
      >
        <ul className="container  bg-navbar-bg border border-border-gray rounded-md px-4 pt-4 ">
          <button className="bg-close-btn-bg text-close-btn-text rounded-md flex justify-center items-center w-8 h-8 ms-auto mb-4">
            <IoClose size={22} />
          </button>
          {navLinks.map((link, index) => (
            <li key={index} >
              <a href={link.url} className={`${index !== navLinks.length - 1 ? "border-b" : ""} text-secondary p-4 block hover:text-black`}  >
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
