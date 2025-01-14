import Button from "react-bootstrap/Button"

const ItemListContainer = (props) => {
    
    const {greeting} = props
    
    return(
        <div className="list-container">
            <h1>{greeting}</h1>
            <Button>Clickeame</Button>
        </div>

    )
}

export default ItemListContainer