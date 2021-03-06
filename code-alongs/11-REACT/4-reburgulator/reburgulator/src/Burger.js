//Pure function
//Stateless component
//
import './Burger.css'
import Ingredient from "./Ingredient.js"

export default function Burger({ ingredients, onRemove}) {
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