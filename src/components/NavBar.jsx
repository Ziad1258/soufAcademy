import LogoImg from "../assets/logo.png";
import { navLinks } from "../data";
import { useState, useEffect } from "react";
import ThemeSwitcher from "./helpers/ThemeSwitcher";
import _ from "lodash";
function NavBar() {

  const [scrollY, setScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [main, setMain] = useState("")

  useEffect(() => {
    handleScrollTop();
    console.log(main);

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
    <nav
      className={`h-[70px] hidden lg:flex sticky   left-0 right-0 top-0  z-[10]`}>
      {/* Logo + BarIcon */}
      <div style={{ display: showNav ? "flex" : "none" }}
        className=" bg-white dark:bg-dark shadow-myShadow dark:shadow-mydarkShaow w-full">
        <div className="container mx-auto px-4 flex justify-between">
          <a href="#" className="flex items-center gap-4">
            <img className="max-h-[50px]" src={LogoImg} alt="Logo" />
            <h2 className="text-2xl font-bold">سوف أكاديمي</h2>
          </a>
          <ul className="flex  ">
            {navLinks.map((link, index) => (
              <li key={index} className="flex m-0"  >
                <a href={link.url} className={`  navLink text-md font-semibold  flex items-center px-6 relative  ${main == link.name ? "active  " : "text-secondary dark:text-darksecondary hover:text-black dark:hover:text-white "}}`}
                  onClick={() => setMain(link.name)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex items-center">
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default NavBar