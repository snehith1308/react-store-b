import "./Header.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { appContext } from "../App";
export default function Header() {
  const { user, setUser, cart, products, orders } = useContext(appContext);
  const items = products.filter((value) => cart[value.id] > 0);
  const [myOrder, setMyOrder] = useState([]);
  const NAME = process.env.REACT_APP_NAME
  const COLOR = process.env.REACT_APP_COLOR
  useEffect(() => {
    setMyOrder(orders.filter((value) => value.email === user.email));
  }, [orders, user]);
  return (
    <div className="App-Header-Row">
      <h2 style={{backgroundColor:COLOR}}>{NAME}</h2>
      <div>
        <Link to={"/"}>Home</Link>-
        <Link to={"/cart"}>Cart({items.length})</Link>-
        {myOrder.length > 0 && (
          <Link to={"/orders"}>Orders({myOrder.length})</Link>
        )}
        {user.email === "" || !user.email ? (
          <Link to={"/login"}>Login</Link>
        ) : (
          <Link
            to={"/login"}
            // onClick={() =>
            //   setUser({ ...user, name: "", email: "", password: "" })
            // }
          >
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}