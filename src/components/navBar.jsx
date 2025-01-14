/*NavBar CSS Puro*/

import CartWidget from "./cartWidget.jsx"

const NavBar = () => {
    return(
        <nav className="contenedor-nav">
            <a className="brand-nav">
                <img className="logo-nav" src="./img/main.png" alt="Ecommerce"/>
                </a>
            <a className="cat-nav">Novedades</a>
            <a className="cat-nav">Productos</a>
            <a className="cat-nav">Contacto</a>
            <CartWidget/>
        </nav>
    )
}

export default NavBar