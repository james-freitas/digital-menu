import "./saudacao.css"

function Saudacao(props) {
  return <div className="saudacao-titulo">
    <h2>Olá {props.nome}</h2>
  </div> 
  
}

export default Saudacao;