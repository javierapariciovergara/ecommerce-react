import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

/* import de navBar clasico, borrar*/
/* import NavBar from "./components/navBar.jsx" */

import NavBarRB from './components/NavBarRB.jsx'
import ItemListContainer from './components/itemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'

/* imports de componentes de ejemplos, borrar para final*/
import FetchContainer from './components/Ejemplos/FetchContainer.jsx'
import EjemploPropChildren from './components/Ejemplos/EjemploPropChildren.jsx'

function App() {
  
  return (
    <BrowserRouter>
      
      <NavBarRB/>

      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Ecommerce"/>} ></Route>
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoria: "/>} ></Route>
        <Route path="/item/:id" element={<ItemDetailContainer></ItemDetailContainer>} ></Route>
      </Routes>
            
      {/* llamada a componentes de ejemplos en clases */}
          {/* <EjemploPropChildren> <img src="../img/main.png" /> </EjemploPropChildren> */}
          {/* <FetchContainer></FetchContainer> */}

    </BrowserRouter>
  )
}

export default App
