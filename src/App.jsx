import "./App.css"
import MobileNavBar from "./components/MobileNavBar"
import NavBar from "./components/NavBar"
import Classes from "./sections/Classes"
import Home from "./sections/Home"
import Partners from "./sections/Partners"
import Services from "./sections/Services"
import Stories from "./sections/Stories"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"
import { useTheme } from "./hooks/useTheme"
export default function App() {
  useTheme();
  return (

    <>
      <MobileNavBar />
      <NavBar />
      <div className="container mx-auto px-4 ">
        <Home />
        <Services />
        <Classes />
        <Stories />
        <Partners />
      </div>
      <About />
      <Contact />
      <Footer />

    </>

  )
}