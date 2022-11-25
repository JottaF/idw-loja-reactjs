import { useLoaderData, useRouteError } from "react-router-dom";
import { Container, Table } from "react-bootstrap";

export async function loader({ params }) {
  const dados = 'teste'
  // const dados = await Produtos.findOne(params.idPedido);
  // let favorito = null;
  // try {
  //     const { favoritos } = await Favoritos.findByProduto(params.idProduto);
  //     if (favoritos.length != 0) {
  //         favorito = favoritos[0];
  //     }
  // } catch (error) { }
  return { dados }
  return { dados, favorito };
}

export function DetalhePedido() {
  const { dados } = useLoaderData()

  return (
    <Container>
      <h1>Detalhes do pedido</h1>

      <div className="head">
        <div>
          <strong>Data</strong>
          <span>15/05/2022</span>
        </div>
        <div>
          <strong>Total</strong>
          <span>R$ 250,00</span>
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
          <tr>
            <td>Produto muito bom com o nome grande</td>
            <td>2</td>
            <td>65</td>
          </tr>
          <tr>
            <td>Produto 2</td>
            <td>5</td>
            <td>965</td>
          </tr>
          <tr>
            <td>Produto 2</td>
            <td>5</td>
            <td>965</td>
          </tr>
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