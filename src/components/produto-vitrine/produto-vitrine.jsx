import "./produto-vitrine.css"
import foto from "../../assets/hamburguer.png"
import bag from "../../assets/bag.png"

function ProdutoVitrine() {
  return <div className="produto-box text-center">
    <img src={foto} alt="Produto" className="prod-vitrine-foto" />
    
    <div>
      <h2>Spicy Burguer</h2>
      <p className="prod-vitrine-descricao">Hamburger de 250g, queijo, tomate, alface e cebola</p>
      <p className="prod-vitrine-preco">R$ 18,90</p>
    </div>

    <div>
      <button className="btn btn-cart">
        <img src={bag} alt="" className="icon" />
        Adicionar
      </button>
    </div>

  </div>
}

export default ProdutoVitrine;