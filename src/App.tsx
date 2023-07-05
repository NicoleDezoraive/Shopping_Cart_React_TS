import { Routes, Route , useNavigate } from "react-router-dom"
import { Container } from "react-bootstrap"
import Home from "./pages/Home"
import Store from "./pages/Store"
// import About from "./pages/About"
import Navbar from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { useEffect } from "react"


function App() {
  
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/"); // Navigate to the home page
  }, []);
  
 return (
 <ShoppingCartProvider>
    <Navbar/>
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/store" element={<Store />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Container>
 </ShoppingCartProvider>)
}

export default App
