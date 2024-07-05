import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ProductBoundary() {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            case 404:
                    return <h2>Oops! Produto não encontrado =(</h2>
                break;
            case 401:
                    return <h2>Você não está autorizado a ver essa página</h2>
                break;
            case 400:
                    return <h2>Parece que deu algo errado na requisição</h2>
                break;
                case 500:
                    return <h2>Erro interno no Servidor</h2> 
                break;
            default:
                    return <h2>Algo deu MUITO errado</h2>
                break;
        }
    }
}