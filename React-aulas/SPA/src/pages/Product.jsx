import { Link, useLoaderData } from "react-router-dom";

export default function Product() {
    const product = useLoaderData()
    /*
    if (!product) {
        return (
            <h2>Oops! Produto não encontrado</h2>
        )
    }
    */

    return (
        <section>
            <Link to="/products"><button>Voltar</button></Link>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button>Comprar</button>
        </section>
    )
}