import { Button, Spinner } from "react-bootstrap";
import { useState } from "react";
import formatarPreco from "../lib/funcoes";
import { FuncoesPedidos } from "../lib/FuncoesPedidos";
import auth from "../lib/auth";
import { LojaContext, useLojaContext } from "../providers/AppProvider";
import Alerta from "./Alerta";
import "./Carrinho.scss";
import { Link } from "react-router-dom";
/**
 * O componente ItemDoCarrinho representa um item
 * da lista de produtos do Carrinho.
 *
 * @param {{produto, onRemover}} param0
 * @returns
 */
function ItemDoCarrinho({ produto, onRemover }) {
  return (
    <li>
      <div>{produto.nome}</div>
      <div>{produto.quantidadeNoCarrinho}</div>
      <div>{formatarPreco(produto.preco * produto.quantidadeNoCarrinho)}</div>
      <div>
        <Button variant="warning" size="sm" onClick={() => onRemover(produto)}>
          X
        </Button>
      </div>
    </li>
  );
}

/**
 * O componente Carrinho representa a interface gráfica
 * que apresenta a lista de produtos do carrinho,
 * a quantidade unitária e o total.
 *
 * @returns
 */
export default function Carrinho() {
  // utiliza o hook useContext para obter os valores do LojaContext
  const { produtosDoCarrinho, onRemover, onFinalizarPedido } = useLojaContext();
  const [loading, setLoading] = useState(false)

  /**
   * Esta função calcula o total do carrinho com base
   * nos preços dos produtos e suas quantidades no carrinho.
   *
   * @returns
   */
  const calcularTotal = () => {
    let total = 0.0;
    if (produtosDoCarrinho) {
      produtosDoCarrinho.forEach(
        (produto) => (total += produto.preco * produto.quantidadeNoCarrinho)
      );
    }
    return total;
  };

  const handleFinalizarPedidoClick = async (e) => {
    setLoading(true)
    await FuncoesPedidos.create(produtosDoCarrinho)
    onFinalizarPedido()
    setLoading(false)
  }
  return (
    <div className="carrinho">
      <h1>Seu carrinho</h1>
      <ul id="lista-carrinho">
        {produtosDoCarrinho &&
          produtosDoCarrinho.map((produto) => (
            <ItemDoCarrinho
              key={produto.id}
              produto={produto}
              onRemover={onRemover}
            ></ItemDoCarrinho>
          ))}
        {(!produtosDoCarrinho ||
          (produtosDoCarrinho && produtosDoCarrinho.length === 0)) && (
            <Alerta
              titulo={"Seu carrinho está vazio"}
              mensagem={"Que tal mudar essa situação? 😉"}
            ></Alerta>
          )}
      </ul>
      <div id="carrinho-total">
        <div>Total</div>
        <div>{formatarPreco(calcularTotal())}</div>
      </div>
      {(auth.getUserInfo() && produtosDoCarrinho.length > 0) &&
        <Link to={'pedidos'}>
          <Button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleFinalizarPedidoClick}>
            {loading && <Spinner size="sm"></Spinner>}
            Finalizar pedido
          </Button>
        </Link>
      }
      {(!auth.getUserInfo() && produtosDoCarrinho.length > 0) && <p className="h6 text-center my-4 text-secondary">
        Vamos fechar esse pedido? Faça <Link to={'/contas/entrar'}>login</Link> ou <Link to={'/contas/cadastrar'}> cadastre-se</Link>
      </p>}
    </div>
  );
}
