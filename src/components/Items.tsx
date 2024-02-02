import Item from "./Item"
import ItemType from "../interfaces/item.interface";


type Props = {
  addItemToCart: (item: ItemType) => void;
  items: ItemType[]
}

const Items = (props: Props) => {
  return (
    <div className="items">
      {props.items.map((item) => 
          <Item
            addItemToCart={props.addItemToCart}
            key={item.name}
            item={item}
          />
      )}
    </div>
  )
}

export default Items;
