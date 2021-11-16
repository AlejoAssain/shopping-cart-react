import {Component} from "react";
import BubbleAlert from "./BubbleAlert"
import CartDetails from "./CartDetails"

const styles = {
    cart: {
        backgroundColor: "#359a2c",
        color: "#fff",
        border: "none",
        padding: "15px",
        borderRadius: "15px",
        cursor: "pointer"
    },
    bubble: {
        position: "relative",
        left: 12,
        top: 20,
    }
}

class Cart extends Component {
    render() {

        const {cart, visibleCart, changeCartVisibility} = this.props
        // using the reduce function calculate the total amount of items of the cart
        const totalCartAmount = cart.reduce((acc, item) => acc + item.amount, 0)

        return (
            <div>
                <span style={styles.bubble}>
                    {totalCartAmount !== 0 ? (<BubbleAlert value={totalCartAmount}/>) : ""}
                </span>
                <button style={styles.cart} onClick={changeCartVisibility}>
                    Cart
                </button>
                {visibleCart ? (<CartDetails cart={cart}/>) : null }
                
            </div>
        )
    }
}

export default Cart