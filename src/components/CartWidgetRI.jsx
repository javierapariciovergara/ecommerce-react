/* CartWidget con React Bootstrap/Icons */

import { MdShoppingCart } from "react-icons/md";
import Badge from "react-bootstrap/Badge"


const CartWidgetRI = () => {

    return (

        <div>
            <MdShoppingCart color="white" fontSize={'30'} />
            <Badge bg="danger">9</Badge>
        </div>
    
    )
}

export default CartWidgetRI