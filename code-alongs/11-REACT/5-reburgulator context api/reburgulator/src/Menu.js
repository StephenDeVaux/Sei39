

export default function Menu({ onAdd, onClear }) {
    return (
        <aside>
            <h2>menu</h2>
            <button onClick={() => onAdd("tomato")}>Tomato</button>
            <button onClick={() => onAdd("cheese")}>Cheese</button>
            <button onClick={() => onAdd("buns")}>Buns</button>
            <button onClick={() => onAdd("patty")}>Patty</button>
            <button onClick={() => onClear()}>eat burger</button>
        </aside>
    )
}