/* CartWidget CSS Puro */

const CartWidget = () => {
    return(
        <div className="cartWidget">
            {/* <span>🛒</span> */}
            <img className="cart-img" src="./img/cart.png" alt="carrito"/>
            <span className="cart-counter">{10}</span>
        </div>
    )
}

export default CartWidget