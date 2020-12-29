//Pure function
//Stateless component
//
import './Burger.css'
import Ingredient from "./Ingredient.js"
import {useContext} from 'react'
import {BurgerContext} from './BurgerContext'

export default function Burger() {

    const { ingredients } = useContext(BurgerContext)

    return (
        <div>
            { ingredients.map((ingredient, idx) =>
                <Ingredient
                    name={ingredient}
                    onRemove={onRemove}
                    idx={idx}
                    /> ) }
        </div>
    )
}