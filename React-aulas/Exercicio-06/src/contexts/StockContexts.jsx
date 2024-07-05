import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const StockContexts = createContext({})

StockContextProvider.proptypes = {
    children: PropTypes.node
}

export function StockContextProvider ({children}) {

    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('obc-react-stock')
        if (!storedItems) return []
        const items = JSON.parse(storedItems)
        items.forEach(item => {
            item.createdAt = new Date(item.createdAt)
            item.updatedAt = new Date(item.updatedAt)
        });
        return items
    })

    const addItem = (item) => {
        setItems(currentState => {
            const updatedItems = [item, ...currentState]
            localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    const updateItem = (itemId, newAttributes) => {
        setItems(currentState => {
            const itemIndex = currentState.findIndex(index => index.id === +itemId)
            const updatedItems = [...currentState]

            Object.assign(updatedItems[itemIndex], newAttributes, {updatedAt: new Date()})
            localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems))

            return updatedItems
        })
    }

    const deleteItem = (itemId) => {
        setItems(currentState => {
            const updatedItems = currentState.filter(item => item.id !== itemId)
            localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    const getItem = (itemId) => {
        return items.find(item => item.id === +itemId)
    }

    const stock = {
        items,
        addItem,
        getItem,
        updateItem,
        deleteItem
    }

    return (
        <StockContexts.Provider value={stock}>
            {children}
        </StockContexts.Provider>
    )
}