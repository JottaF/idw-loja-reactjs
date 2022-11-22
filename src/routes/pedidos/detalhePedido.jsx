import { useLoaderData, useRouteError } from "react-router-dom";

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
    console.log(dados);
    return { dados }
    return { dados, favorito };
}

export function DetalhePedido() {
    const { dados } = useLoaderData()

    return <h1>{dados}</h1>
}