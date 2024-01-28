/* eslint-disable jsx-a11y/anchor-is-valid */
import "./navbar.css";
import logo from "../../assets/logo.png"
import bag from "../../assets/bag.png"
import Cart from "../cart/cart"

function Navbar(props) {
  
  function openSidebar() {
    const event = new CustomEvent('openSidebar');
    window.dispatchEvent(event);
  }
  
  return <div>
    <img src={logo} alt="Logotipo" className="logotipo" />

    {
      props.showMenu && 
        <div className="menu">
          <a href="#">Histórico</a>
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