import { useContext } from "react";
import { StockContexts } from "../contexts/StockContexts";

export default function useStock() {
    return useContext(StockContexts)
}