import { Button, Card, Col, Row } from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrent";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

const StoreItem = ({id, name, price, imgUrl}: StoreItemProps) => {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity: number = getItemQuantity(id);
    return ( 
    <Card className="h-100">
        <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover"}} />    
        <Card.Body >
            <Card.Title as={Row} className="align-items-baseline mb-4">
            <Col xs={6} className="fs-2">
                {name}
            </Col>
            <Col xs={6} className="text-muted text-end">
               {formatCurrency(price)}
            </Col>
            </Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? (
                    <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ Add To Card</Button>
                ) : <div className="d-flex align-items-center flex-column" style={{gap:"0.5rem"}}>
                        <div className="d-flex align-items-center justify-content-center" style={{gap:"0.5rem"}}>
                            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                            <div>
                                <span className="fs-3">{quantity}</span> in card
                            </div>
                            <Button onClick={() => increaseCartQuantity(id)}>+</Button>

                        </div>
                        <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>Remove</Button>
                    </div>}
            </div>
        </Card.Body>    
    </Card>
     );
}
 
export default StoreItem;