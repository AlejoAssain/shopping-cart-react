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