import Logo from "./Logo";
import Cart from "./Cart";

// ready
// const styles = {
//     nav: {
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         height: "100px",
//         justifyContent: "space-between",
//         position: "relative",
//         padding: "0 50px",
//         boxShadow: "0 2px 3px rgb(0,0,0,0.1)"
//     }
// }

type Props = {
  cart: any;
  changeCartVisibility: any;
  isCartVisible: boolean; 
}

const Navbar = (props: Props) => {
  const { cart, changeCartVisibility, isCartVisible } = props;

  return (
    <nav className="navbar">
      <Logo/>
      <Cart cart={cart} changeCartVisibility={changeCartVisibility} isCartVisible={isCartVisible}/>
    </nav>
  )
}

export default Navbar;