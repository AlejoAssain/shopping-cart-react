import { ReactNode } from "react";


type Props = {
  children: ReactNode
};

const Layout = (props: Props) => {
  return (
    <div className="layout">
      <div className="container">
        { props.children }
      </div>
    </div>
  )
}

export default Layout;