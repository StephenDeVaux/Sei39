
import './Copyright.css'

// 2 different syntaxes ti make your own component
// first syntac is to use a function

export default function Copyright({year}) { 
    return <div className="copyright">copyright &copy; {year }</div>
}

