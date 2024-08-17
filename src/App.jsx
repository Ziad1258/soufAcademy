import "./App.css"
import MobileNavBar from "./components/MobileNavBar"
import NavBar from "./components/NavBar"
import Classes from "./sections/Classes"
import Home from "./sections/Home"
import Services from "./sections/Services"
export default function App() {
  return (
    
    <>
      <MobileNavBar />
      <NavBar />

      <div className="container mx-auto px-8 md:px-0">
      <Home />
      <Services />
      <Classes />
      </div>
    </>
    
  )
}