import { useState, useContext } from "react";
import logo from "../assets/img/12345.webp";

import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const loggedInUser = () => {
  //api call to check authentication
  return true;
};

const Title = () => (
  <a href="/">
    <img data-testid="logo"  className="h-28 p-3 text-right " alt="logo" src={logo} />
  </a>
);

const Header = () => {
  const [isloggedIn, setIsloggedIn] = useState(true);

  const isOnline = useOnline();

  const { user } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 md:bg-green-300">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10 font-medium text-xl ">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-2" data-testid="cart">Cart-{cartItems.length} items</li>
          </Link>
        </ul>
      </div>
      <h1 data-testid="online-status">{isOnline?"☑️":"🔴"}</h1>
      {/* <h1 className="p-10 font-bold text-red-800">{user.name}</h1> */}
      {
        // javascript expression.
        isloggedIn ? (
          <button
            className="font-bold pr-2"
            onClick={() => {
              setIsloggedIn(false);
            }}
          >
            Logout{" "}
          </button>
        ) : (
          <button
            className="font-bold pr-2"
            onClick={() => {
              setIsloggedIn(true);
            }}
          >
            Login{" "}
          </button>
        )
      }
    </div>
  );
};

export default Header;
