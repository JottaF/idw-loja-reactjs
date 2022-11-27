import { Container, Button } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FuncoesPedidos } from "../../lib/FuncoesPedidos";

export async function loader() {
    const dados = await FuncoesPedidos.find()
    return { dados }
}

const calcularPreco = (itens) => {
    let total = 0

    for (let item of itens) {
        total += item.produto.preco * item.quantidade
    }

    return total.toLocaleString(undefined, {
        style: "currency",
        currency: "BRL",
    })
}

export default function Pedidos() {
    const { dados } = useLoaderData()
    return (
        <>
            <Container>
                <h1>Pedidos</h1>

                {
                    dados.pedidos.map(pedido => {
                        const total = calcularPreco(pedido.itens_pedido)
                        return (
                            <div key={pedido.id} className="d-flex bd-highlight my-2 py-2 px-2 bg-secondary text-white rounded">
                                <span className="p-2 flex-grow-1 bd-highlight">{new Date(pedido.data).toLocaleDateString()}</span>
                                <span className="p-2 bd-highlight">{total}</span>
                                <Link to={'./' + pedido.id} >
                                    <Button className="p-2 bd-highlight btn-light">Abrir</Button>
                                </Link>
                            </div>
                        )
                    })
                }
            </Container>
        </>
    )
}