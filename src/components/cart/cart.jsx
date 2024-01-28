
import { useEffect, useState, useContext } from "react";
import { Dock } from "react-dock";
import ProdutoCart from "../produto-cart/produto-cart";
import { useNavigate } from "react-router-dom";
import "./cart.css"
import { CartContext } from "../../contexts/cart-context";


function Cart() {
  
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const {cartItems, totalCart} = useContext(CartContext);

  useEffect( function() {
    window.addEventListener('openSidebar', function(){
      setShow(true);
    });

    // setItemsCart(carrinho);
  }, []);

  function checkout() {
    navigate('/checkout');
  }

  return <Dock 
    position="right"
    isVisible={show}
    fluid={false}
    size={420}
    onVisibleChange={ function(visible) { // Quando clica fora do dock altera visible para false
      setShow(visible)
    }}
  >
    <div className="text-center">
      <h1>Meu Pedido</h1>
    </div>

    <div className="lista-produtos">
      {
        cartItems.map(function(item){
          return <ProdutoCart key={item.id}
                              id={item.id}
                              foto={item.foto}
                              nome={item.nome}
                              qtd={item.qtd}
                              preco={item.preco}
          />
        })
      }
      
      
    </div>

    <div className="footer-cart">
      <div className="footer-cart-valor">
        <span>Total</span>
        <span><strong>
        {new Intl.NumberFormat('pt-BR',
        {style: 'currency', currency: "BRL"}).format(totalCart)}  
        </strong></span>
      </div>
    </div>
    <div>
      <button onClick={checkout} className="btn-checkout">Finalizar Pedido</button>
    </div>
  </Dock>
}

export default Cart;