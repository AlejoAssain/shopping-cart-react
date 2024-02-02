import "./App.css"
import Items from "./components/Items"
import Layout from "./components/Layout"
import Title from "./components/Title"
import Navbar from "./components/Navbar"
import useCart from "./hooks/useCart";


const ITEMS = [
  { id: 1, name: "Tomato", price: 1500, img: "/items/tomato.jpg" },
  { id: 2, name: "Beans", price: 2500, img: "/items/beans.jpg" },
  { id: 3, name: "Lettuce", price: 500, img: "/items/lettuce.jpg" }
]

const App = () => {
  const cartHook = useCart();

  return (
    <div>  
      <Navbar 
        cart={cartHook.cart} 
        changeCartVisibility={cartHook.changeCartVisibility} 
        isCartVisible={cartHook.cart.isCartVisible}
      />
      <Layout>
        <Title/>
        <Items
          addItemToCart={cartHook.addItemToCart}
          items={ITEMS}
        />
      </Layout>
    </div>
  )
}

export default App;
