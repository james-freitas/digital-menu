/* eslint-disable jsx-a11y/anchor-is-valid */
import "./navbar.css";
import logo from "../../assets/logo.png"
import bag from "../../assets/bag.png"
import Cart from "../cart/cart"
import {Link} from "react-router-dom"

function Navbar(props) {
  
  function openSidebar() {
    const event = new CustomEvent('openSidebar');
    window.dispatchEvent(event);
  }
  
  return <div>
    <Link to="/">
      <img src={logo} alt="Logotipo" className="logotipo" />
    </Link>

    {
      props.showMenu && 
        <div className="menu">
          <Link to="/historico">Histórico</Link>
          <button onClick={openSidebar} className="btn btn-red">
            <img src={bag} alt="bag" className="icon" />
            Sacola
          </button>
        </div>
    }

    <Cart />
  </div>
}

export default Navbar;