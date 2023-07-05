import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="starter-template">
            <h1>Home</h1>
            <p className="lead" >The project is an online store simulation that allows users to browse and purchase products. It is built using React and TypeScript, leveraging the power of hooks and the useContext API for state management. The shopping cart functionality is implemented using local storage to persist the cart data across sessions. The project also utilizes Bootstrap for responsive and visually appealing UI components. With this project, users can add items to their cart, adjust quantities, and remove items. It provides a seamless and intuitive shopping experience, showcasing the capabilities of React and TypeScript in building interactive web applications.</p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <img src="/images/shoppingCart.jpg" style={{ width: "90%" }} alt="Shopping Cart" />
        <Link to="/store">
          <Button variant="primary">Go to Store</Button>
        </Link>
      </div>
        </div>

    );
}
 
export default Home;