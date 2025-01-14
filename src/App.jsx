import './App.css'

/* import NavBar from "./components/navBar.jsx" */
import NavBarRB from './components/NavBarRB.jsx'
import ItemListContainer from './components/itemListContainer.jsx'

function App() {
  
  return (
  
    <div>
      <NavBarRB/>
      <ItemListContainer greeting="Bienvenidos a Ecommerce"/>
    </div>

)
}

export default App
