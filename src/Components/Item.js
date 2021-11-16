import { Component } from "react";
import Button from "./Button"


const styles = {
    item: {
        border: "solid 1px #eee",
        boxShadow: "0 5px 5px rgb(0,0,0,0.1)",
        width: "30%",
        padding: "10px 15px",
        borderRadius: "5px"
    },

    img: {
        width: "100%"
    }
    
}

class Item extends Component {
    render() {
        const { item, addToCart } = this.props
    
        return (
            <div style={styles.item}>
                <img src={item.img} alt={item.name} style={styles.img}/>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <Button
                    onClick={() => addToCart(item)}
                >
                    Add to cart
                </Button>
            </div>
        )
    }
}

export default Item;