import { Component } from "react";
import Item from "./Item"

const styles = {
    items: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
}

class Items extends Component {
    render() {
        const { items, addToCart } = this.props
        return (
            <div style={styles.items}>
                {items.map((item) => 
                    <Item
                        addToCart={addToCart}
                        key={item.name}
                        item={item}
                    />
                )}
            </div>
        )
    }
}

export default Items