import { Link,NavLink } from "react-router-dom";

const NavBar = () => {
   return <div>
    <div className="header">
        <div>Shopping Cart</div>
        <div>
            <NavLink to="/">Home page</NavLink>
            <NavLink to="/cart">Cart page</NavLink>
        </div>
   </div>
   </div>
}

export default NavBar;