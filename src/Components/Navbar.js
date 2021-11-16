import {Component} from "react";
import Logo from "./Logo"
import Cart from "./Cart"


const styles = {
    nav: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "100px",
        justifyContent: "space-between",
        position: "relative",
        padding: "0 50px",
        boxShadow: "0 2px 3px rgb(0,0,0,0.1)"
    }
}

class Navbar extends Component {
    render() {

        const {cart, changeCartVisibility, visibleCart} = this.props

        return (
            <nav style={styles.nav}>
                <Logo/>
                <Cart cart={cart} changeCartVisibility={changeCartVisibility} visibleCart={visibleCart}/>
            </nav>
        )
    }
}

export default Navbar