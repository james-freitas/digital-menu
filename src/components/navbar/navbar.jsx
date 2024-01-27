/* eslint-disable jsx-a11y/anchor-is-valid */
import "./navbar.css";
import logo from "../../assets/logo.png"
import bag from "../../assets/bag.png"

function Navbar() {
  return <div>
    <img src={logo} alt="Logotipo" className="logotipo" />

    <div className="menu">
      <a href="#">Histórico</a>
      <button className="btn btn-red">
        <img src={bag} alt="bag" className="icon" />
        Sacola
      </button>
    </div>
  </div>
}

export default Navbar;