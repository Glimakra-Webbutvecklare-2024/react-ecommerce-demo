import { Link, NavLink } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "../App.css";


// Uppgift: Lägg till en navbar till Layout
function Layout(props) {
    return ( <>
        <Header/>
        <nav>
            <ul>
                <li> <NavLink to="/" className={({isActive}) => isActive ? "active-link" : "link"}>Home</NavLink> </li>
                <li> <NavLink to="/products" className={({isActive}) => isActive ? "active-link" : "link"}>Products</NavLink> </li>
                <li> <NavLink to="/profile" className={({isActive}) => isActive ? "active-link" : "link"}>Profile</NavLink> </li>
            </ul>
        </nav>
        { /* Huvudinnehåll ska ligga here */ }
        {props.children}
        <Footer/>
    </>);
}

export default Layout;