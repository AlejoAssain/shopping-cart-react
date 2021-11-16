import { Component } from "react";
import Items from "./Components/Items"
import Layout from "./Components/Layout"
import Title from "./Components/Title"
import Navbar from "./Components/Navbar"

class App extends Component {
  state = {
    items: [
      { name: "Tomato", price: 1500, img: "/items/tomato.jpg"},
      { name: "Beans", price: 2500, img: "/items/beans.jpg"},
      { name: "Lettuce", price: 500, img: "/items/lettuce.jpg"}
    ],
    cart: [
      // cart object structure { name: "Tomato", price: 1500, img: "/items/tomato.jpg", amount: 1}
    ],
    visibleCart: false

  }

changeCartVisibility = () => {
  if (this.state.cart.length > 0) {
    console.log(this.state.cart)
    this.setState({visibleCart: !this.state.visibleCart})
  }
}

// when adding an item to cart
addToCart = (item) => {
  const {cart} = this.state;

  // if a product is on the cart list, up the its amount by one
  if (cart.find(x => x.name === item.name)) {
    // if the name is the one we want (0) to up its amount, grab the static props of the item and then change the amount prop to old amount plus 1 (1)
    // if it isn't the name just pass the item as it is (2)
    const newCart = cart.map( x => x.name === item.name // 0
      ? ({...x, amount: x.amount + 1}) : x) // 1
    return (this.setState({cart: newCart})) // 2
  }
  
  // it's a new item to add, so grab the static props of the item and set it's amount to 1
  return this.setState(
    {cart: this.state.cart.concat({
      ...item,
      amount: 1
    })
    }
  )
}
  render() {

    const { items, cart, visibleCart} = this.state

    console.log(this.state.visibleCart)

    return (
      
      <div>  
          <Navbar cart={cart} changeCartVisibility={this.changeCartVisibility} visibleCart={visibleCart}/>
        <Layout>
          <Title/>
          <Items
            addToCart={this.addToCart}
            items={items}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
