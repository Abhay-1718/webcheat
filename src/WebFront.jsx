import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"




const WebFront = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default WebFront
// Purpose: To display the entire website after the user is authenticated.
// Functionality:
// It includes Navbar, Home, and Footer components, so the user sees the full layout once authenticated.
