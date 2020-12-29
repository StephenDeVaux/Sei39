import { useContext } from "react"
import { BurgerContext } from "./BurgerContext"

import { userContext } from 'react'
import { BurgerContext } from './BurgerContext'

export default function Ingredient({ name, idx }) {

    const { remove } = useContext(BurgerContext)

    const handleClick = () => remove(idx)

    return (
        <div className={name} key={idx} onClick={handleClick} >
            {name}
        </div>
    )
}
