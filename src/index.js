import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Contas from './layouts/contas';
import Vitrine from './layouts/vitrine';
import { Pedido } from './layouts/pedido';
import AppProvider from './providers/AppProvider';
import { AuthProvider } from './providers/AuthProvider';
import reportWebVitals from './reportWebVitals';
import Cadastrar from './routes/contas/cadastrar';
import Entrar from './routes/contas/entrar';
import Home, { loader as homeLoader, ServidorIndisponivel } from './routes/home';
import Perfil, { loader as perfilLoader } from './routes/perfil';
import Produto, { loader as produtoLoader, ProdutoNaoEncontrado } from './routes/produto';
import RecuperarAcesso from './routes/contas/recuperar-acesso';
import { DetalhePedido, loader as pedidoLoader, PedidoIndisponivel } from './routes/pedidos/detalhePedido';
import Pedidos, { loader as pedidosLoader } from './routes/pedidos/pedidos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'contas',
        element: <Contas />,
        children: [
          {
            path: 'entrar',
            element: <Entrar />
          },
          {
            path: 'cadastrar',
            element: <Cadastrar />
          },
          {
            path: 'recuperar-acesso',
            element: <RecuperarAcesso />
          },
        ],
      },
      {
        path: '',
        element: <Vitrine />,
        children: [
          {
            path: 'perfil',
            element: <Perfil />,
            loader: perfilLoader,
          },
          {
            path: 'produtos/:idProduto',
            loader: produtoLoader,
            errorElement: <ProdutoNaoEncontrado />,
            element: <Produto />
          },
          {
            path: '',
            loader: homeLoader,
            element: <Home />,
            errorElement: <ServidorIndisponivel />,
          }
        ]
      },
      {
        path: 'pedidos',
        element: <Pedido />,
        children: [
          {
            path: '',
            loader: pedidosLoader,
            element: <Pedidos />,
            errorElement: <PedidoIndisponivel />
          },
          {
            path: ':idPedido',
            loader: pedidoLoader,
            element: <DetalhePedido />,
            errorElement: <PedidoIndisponivel />
          }
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
