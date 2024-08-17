import LogoImg from "../assets/logo.png";
import { navLinks } from "../data";
import { useState , useEffect } from "react";
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
    className={`h-[70px] hidden md:flex sticky   left-0 right-0 top-0  z-[10]`}>
      {/* Logo + BarIcon */}
     <div   style={{ display: showNav ? "flex" : "none" }} 
 className=" bg-white drop-shadow-md w-full">
     <div className="container mx-auto px-4 flex justify-between">
     <div  className="flex items-center gap-4">
        <img className="max-h-[50px]" src={LogoImg} alt="Logo" />
        <h2 className="text-2xl font-bold">سوف أكاديمي</h2>
      </div>
      <ul className="flex  ">
        {navLinks.map((link, index) => (
          <li key={index} className="flex m-0"  >
            <a href={link.url} className={` text-md font-semibold  flex items-center px-6 relative navLink ${main == link.name ? "active" : "text-secondary hover:text-black "}}`} 
            onClick={() => setMain(link.name)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
     </div>
     </div>

    </nav>
  )
}

export default NavBar