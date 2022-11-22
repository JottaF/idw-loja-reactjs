import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import BarraDeNavegacao from "../../componentes/BarraDeNavegacao"
import Rodape from "../../componentes/Rodape"

import './styles.scss'

export function Pedido({ children }) {
  return (
    <>
      <BarraDeNavegacao />
      <Container fluid className="my-5 main-container shadow">
        <Outlet />
      </Container>
      <Rodape className='rodape' />
    </>
  );
}