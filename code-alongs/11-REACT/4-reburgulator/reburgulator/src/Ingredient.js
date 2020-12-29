export default function Ingredient ({name, onRemove, idx}) { 

    const handleClick = () => onRemove(idx)

    return ( 
        <div className={name} key={idx} onClick={handleClick} >
            {name}
        </div>
    )
}
