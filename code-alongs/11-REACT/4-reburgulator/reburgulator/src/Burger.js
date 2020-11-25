//Pure function
//Stateless component
//
export default function Burger({ ingredients, onRemove}) {
    return (
        <div>
            { ingredients.map((ingredient, idx) =>
                <p key={idx} onClick={() => onRemove(idx)}>
                    {ingredient}
                </p>)}

        </div>
        // <section>
        // <h2>burger</h2>
        //     <div>{ingredients.map(this.renderIngredient)}</div>
        // </section>
    )
}