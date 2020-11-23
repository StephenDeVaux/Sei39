import { Component } from 'react'
import './Chicken.css'

class Chicken extends Component {
    constructor(props) {
        super(props)
        this.handlChange = this.handlChange.bind(this) //This is to make the this in handleclick work.... what a mess! 
        this.reset = this.reset.bind(this)
        this.state = {
            val: 5
        }

    }

    handlChange(num) {
        this.setState({
            val: this.state.val + num
        })
    }

    reset() {
        this.setState({
            val: 0
        }) 
    }

    render() {
        return (
            <div className="box">
                <p className="text-chicken">Chicken</p>
                <button
                    className="chicken-btn"
                    onClick={() => this.handlChange(-1)}
                >-</button>
                <p className="text"
                >{this.state.val}</p>
                <button
                    className="chicken-btn"
                    onClick={() => this.handlChange(1)}
                >+</button>
                <button
                    className="chicken-btn"
                    onClick={this.reset}
                >reset</button>
            </div>
        )
    }
}

export default Chicken