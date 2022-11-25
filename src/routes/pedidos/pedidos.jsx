import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Pedidos() {
    return (
        <>
            <Container>
                <h1>Pedidos</h1>

                <div className="d-flex bd-highlight my-2 py-2 px-2 bg-secondary text-white rounded">
                    <span className="p-2 flex-grow-1 bd-highlight">Data</span>
                    <span className="p-2 bd-highlight">Valor</span>
                    <Link to={'./1'}>
                        <Button className="p-2 bd-highlight btn-light">Abrir</Button>
                    </Link>
                </div>
                <div className="d-flex bd-highlight my-2 py-2 px-2 bg-secondary text-white rounded">
                    <span className="p-2 flex-grow-1 bd-highlight">Data</span>
                    <span className="p-2 bd-highlight">Valor</span>
                    <Link to={'./1'}>
                        <Button className="p-2 bd-highlight btn-light">Abrir</Button>
                    </Link>
                </div>
            </Container>
        </>
    )
}