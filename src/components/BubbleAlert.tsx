import {Component} from "react";


// ready in css
// const styles = {
//     bubbleAlert: {
//         backgroundColor: "#e9725a",
//         borderRadius: "15px",
//         color: "#fff",
//         padding: "2px 10px",
//         fontSize: "0.9rem", 
//         width: "20px",
//     }
// }

type Props = {
  value: number;
}

const BubbleAlert = (props: Props) => {
  const { value } = props;

  const getNumber = (n: number) => {
    if (!n) {
        return " "
    }
    return n > 9 ? "9+" : n
}

  return (
    <span className="bubbleAlert">
        { getNumber(value) }
    </span>
  )
}

export default BubbleAlert;