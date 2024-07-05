import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
    return (
        <>
            <Header/>
            <main>
                <p>
                    Conteudo principal
                </p>
                <hr />
                <Outlet/>
            </main>
            <footer>
                <hr />
                <p>
                    Deito com o React
                </p>
            </footer>
        </>
    )
}