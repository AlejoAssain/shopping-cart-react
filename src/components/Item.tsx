import ItemType from "../interfaces/item.interface";
import Button from "./Button"


type Props = {
  item: ItemType
  addItemToCart: (item: ItemType) => void;
}

const Item = (props: Props) => {
  const { item, addItemToCart } = props
  return (
    <div className="item">
      <img src={item.img} alt={item.name} className="img"/>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <Button
        onClick={() => addItemToCart(item)}
      >
        Add to cart
      </Button>
    </div>
  )
}

export default Item