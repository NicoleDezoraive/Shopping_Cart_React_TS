import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItem from "../data/items.json"
import formatCurrency from "../utilities/formatCurrent"

type CartItemProps ={
    id: number
    quantity: number
}

const CartItem = ({ id, quantity}: CartItemProps) => {
    const { removeFromCart } = useShoppingCart();
    const item = storeItem.find(i => i.id === id);
    if(item == null) return null;


    return ( 
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} style={{width: "123px", height: "75px", objectFit: "cover"}}/> 
            <div className="me-auto">
                <div>
                    {item.name}{quantity > 1 && <span className="text-muted" style={{fontSize: "0.65rem"}}> X{quantity}</span>}
                </div>
                <div className="text-muted" style={{fontSize: "0.75rem"}}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>
                {formatCurrency(item.price * quantity)}
            </div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
            
        </Stack>
     );
}
 
export default CartItem;