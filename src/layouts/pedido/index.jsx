import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import BarraDeNavegacao from "../../componentes/BarraDeNavegacao"
import Rodape from "../../componentes/Rodape"

import './styles.scss'

export function Pedido({ children }) {
  return (
    <>
      <BarraDeNavegacao />
      <Container className="content">
        <Container fluid className="my-5 pb-3 main-container shadow">
          <Outlet />
        </Container>
      </Container>
      <Rodape className='rodape' />
    </>
  );
}