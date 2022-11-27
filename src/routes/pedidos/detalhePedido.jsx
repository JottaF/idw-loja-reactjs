import { Link, useLoaderData, useRouteError } from "react-router-dom";
import { Container, Table, Anchor, Row } from "react-bootstrap";
import { FuncoesPedidos } from "../../lib/FuncoesPedidos";
import { Produtos } from "../../lib/Produtos";
import formatarPreco from "../../lib/funcoes";

export async function loader({ params }) {
  const { pedido } = await FuncoesPedidos.findOne(params.idPedido);

  let dados = []
  try {
    for (let p = 0; p < pedido.itens_pedido.length; p++) {
      const element = pedido.itens_pedido[p];
      let { nome, codigo } = await Produtos.findOne(element.produto.codigo)
      let total = element.produto.preco * element.quantidade
      dados.push({ nome, codigo, quantidade: element.quantidade, total })
    }
  } catch (error) {
    throw new Error(error)
  }
  dados.push({ data: pedido.data })

  return dados
}

export function DetalhePedido() {
  const dados = useLoaderData()


  const fullData = dados.find(e => {
    if (e.data)
      return e.data
  })

  const data = new Date(fullData.data).toLocaleDateString()

  let total = 0
  for (let dado of dados) {
    if (!dado.data) {
      total += dado.total
    }
  }

  return (
    <Container>
      <div className="header">
        <h1>Detalhes do pedido</h1>
        <Link to={'../'}>Voltar</Link>
      </div>

      <div className="head">
        <div>
          <strong>Data</strong>
          <span>{data}</span>
        </div>
        <div>
          <strong>Total</strong>
          <span>{formatarPreco(total)}</span>
        </div>
      </div>
      <Table responsive striped bordered hover>
        <thead>

          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {
            dados.map(p => {
              if (!p.data)
                return (
                  <tr key={p.codigo}>
                    <td>{p.nome}</td>
                    <td>{p.quantidade}</td>
                    <td>{formatarPreco(p.total)}</td>
                  </tr>
                )
            })
          }
        </tbody>
      </Table>
    </Container>
  )
}

export function PedidoIndisponivel() {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <p>
        Infelizmente temos um problema para obter os dados do pedido. Tente
        novamente dentro de instantes.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}