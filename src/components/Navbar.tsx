import { Container,Button, Nav, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
    const { openCart, cartQuantity} = useShoppingCart();
    return ( 
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                {/* <Nav.Link to="/about" as={NavLink}>About</Nav.Link> */}
                <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
            </Nav>
            <Button onClick={openCart} variant="outline-primary" style={{ width: "3rem", height: "3rem" ,position: "relative"}} className="rounded-circle">
                <FaShoppingCart /> 
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
                style={{
                    color: "white",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "translate(25%, 35%)"
                }}>
                    {cartQuantity}
                </div>
            </Button>
        </Container>
    </NavbarBs> );
}
 
export default Navbar;