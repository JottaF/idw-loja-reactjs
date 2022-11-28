import * as qs from 'qs'
import { API, BEARER } from '../constants'
import auth from './auth'
import { strapiDataToObject } from './funcoes'

export const FuncoesPedidos = {
  async create(produtos) {
    const user = auth.getUserInfo();
    const itens = produtos.map((p) => {
      return {
        quantidade: p.quantidadeNoCarrinho,
        produto: {
          codigo: p.id,
          preco: p.preco
        },
      }
    })

    try {
      const response = await fetch(`${API}/pedidos`, {
        method: 'POST',
        headers: {
          Authorization: `${BEARER} ${auth.getToken()}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(
          {
            data: {
              data: new Date().getTime(),
              user: user.id,
              itens_pedido: itens
            }
          }
        )
      });

      const json = await response.json();
      if (json.data) {
        const pedido = strapiDataToObject(json.data);
        return pedido;
      }
      if (json.error) {
        throw json.error;
      }
    } catch (error) {
      throw error;
    }
  },

  async find() {
    const user = auth.getUserInfo();
    try {
      let query = qs.stringify(
        {
          populate: [
            'user',
          ],
          filters: {
            user: {
              id: {
                $eq: user.id,
              }
            }
          }
        },
        {
          encodeValuesOnly: true,
        }
      );
      const response = await fetch(`${API}/pedidos/?${query}`, {
        headers: {
          Authorization: `${BEARER} ${auth.getToken()}`
        }
      });
      const json = await response.json();
      if (json.data) {
        const pedidos = strapiDataToObject(json.data);
        return { pedidos, meta: json.meta };
      }
      if (json.error) {
        throw json.error;
      }
    } catch (error) {
      throw error;
    }
  },

  async findOne(idPedidos) {
    const user = auth.getUserInfo();
    try {
      let query = qs.stringify(
        {
          populate: [
            'user',
          ],
          filters: {
            user: {
              id: {
                $eq: user.id,
              }
            }
          }
        },
        {
          encodeValuesOnly: true,
        }
      );
      const response = await fetch(`${API}/pedidos/${idPedidos}/?${query}`, {
        headers: {
          Authorization: `${BEARER} ${auth.getToken()}`
        }
      });
      const json = await response.json();
      if (json.data) {
        const pedido = strapiDataToObject(json.data);
        if (pedido.user.id != user.id) {
          throw new Error('Você não tem permissão de acesso a este pedido.')
        }
        return { pedido, meta: json.meta };
      }
      if (json.error) {
        throw json.error;
      }
    } catch (error) {
      throw error;
    }
  }
}