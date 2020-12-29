import React, { useState, createContext } from 'react'

export const BurgerContext = createContext() 

export function BurgerProvider({children}) {
    const [ingredients, setIngredients] = useState([])

    const add = ingredient => setIngredients([...ingredients, ingredient])

    const clear = () => setIngredients([])

    const remove = tragetIdx => setIngredients(ingredients.filter((ing, idx) => idx !== tragetIdx))

    return ( 
            <BurgerContext.Provider value={{ingredients, add, clear, remove}}>
                {children}
            </BurgerContext.Provider>
    )
}
