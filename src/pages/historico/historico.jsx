import Navbar from "../../components/navbar/navbar";
import "./historico.css";
import {pedidos} from "../../dados.js"
import { useEffect, useState } from "react";
import api from "../../services/api.js"; 

function Historico() {

  const [pedidos, setPedidos] = useState([]);

  useEffect(function(){
    api.get("/pedidos")
    .then((resp) => {
      setPedidos(resp.data);
    })
    .catch((err) => {
      alert('Erro ao carregar pedidos');
    })
  },[]); // function chamada somente uma vez

  return <> 
    <Navbar showMenu={true}/>

    <div className="container">
      <div className="titulo text-center">
        <h1>Histórico de Pedidos</h1>
      </div>
      <div className="box-pedido">
        <table className="table">
          {
            pedidos.map(function(ped){
              return <tr key={ped.id_pedido}>
                      <td><strong>Pedido {ped.id_pedido}</strong></td>
                      <td className="text-light">{ped.dt_pedido}</td>
                      <td className="text-red">
                        {new Intl.NumberFormat('pt-BR',
                        {style: 'currency', currency: "BRL"}).format(ped.total)}
                      </td>
                      
                    </tr> 
            })
          }
        </table>
      </div>
    </div>

  </>
}

export default Historico;