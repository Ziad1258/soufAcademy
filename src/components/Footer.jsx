import { FaHeart } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="border-t">
        <div className="flex items-center gap-2 justify-center  mx-auto px-4  py-8 container">
        created with  <span className="text-red-500"> <FaHeart /> </span> by <a href="https://www.facebook.com/Hb9Li" target="_blank" className="text-blue-500 font-bold">Ferdnani Ziad</a> <span> <FaRegCopyright /> </span> 2024


        </div>
    </footer>
  )
}

export default Footer