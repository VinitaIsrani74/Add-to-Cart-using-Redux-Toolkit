import { useSelector } from "react-redux";
import "./navbar.css"
import { Link } from "react-router-dom";



const NavBar = () => {
  const cartProduct = useSelector(state => state.cart)
  return (
   <div className="navbar">
    <div className="left">
        <h3>Redux Toolkit</h3>
       <Link to="/">Products</Link>
       
    </div>
    <div className="right">
    <Link to="/cart">My Bag <sup>{cartProduct.length}</sup></Link>
    </div>
   </div>
  );
};

export default NavBar;
