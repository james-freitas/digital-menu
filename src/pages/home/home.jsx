import Navbar from "../../components/navbar/navbar";
import ProdutoVitrine from "../../components/produto-vitrine/produto-vitrine";
import api from "../../services/api.js";
import { useEffect, useState } from "react";

function Home() {

  const [produtos, setProdutos] = useState([]);

  useEffect(function(){
    api.get("/produtos")
    .then((resp) => {
      setProdutos(resp.data);
    })
    .catch((err) => {
      alert('Erro ao carregar produts');
    })
  },[]); // function chamada somente uma vez

  return <> 
    <Navbar showMenu={true}/>

    <div className="container">
      <div className="titulo text-center">
        <h1>Nosso Cardápio!</h1>
        <p className="subtitulo">Clique em adicionar para colocar os produtos na sacola de compras. Se preferir, você pode pedir pelo WhatsApp: (11) 94785-2140</p>
      </div>
    </div>

    <div className="text-center">
      {
        produtos.map(function(prod){
          return <ProdutoVitrine  key={prod.id}
                                  id={prod.id}
                                  nome={prod.nome}
                                  descricao={prod.descricao}
                                  preco={prod.preco}
                                  foto={prod.foto} /> 
        })
      }
      
    </div>

  </>
}

export default Home;