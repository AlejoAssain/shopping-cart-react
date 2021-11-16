import {Component} from "react";

const styles = {
    cartDetails: {
        backgroundColor: "#fff",
        position: "absolute",
        marginTop: 30,
        boxShadow: "1px 5px 5px rgb(0,0,0,0.1)",
        borderRadius: "5px",
        width: "300px",
        right: 50
    },
    item: {
        listStyleType: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px 20px",
        borderBottom: "solid 1px #aaa",

    },
    ul: {
        margin: 0,
        padding: 0,
    }
}

class CartDetails extends Component {

    render() {
        const {cart} = this.props

        return (
            <div style={styles.cartDetails}>
                <ul style={styles.ul}>
                    {cart.map(x => (
                        <li key={x.name} style={styles.item}>
                            <img alt={x.name} src={x.img} width="50" height="32"></img>
                            {x.name} <span>{x.amount}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default CartDetails;