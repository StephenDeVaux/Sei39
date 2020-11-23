import { Component } from 'react'

class Slider extends Component {

    constructor (props) {
        super(props)
        this.handleChange = this.handleChange.bind(this) //This is to make the this in handleclick work.... what a mess! 
        this.state = {
            val: 5
        }
    }

    handleChange(e) { 
        this.setState({
            val: e.target.value
        })
    }

    render() {
        return (
            <div className="slider" >
                <input
                    onChange={this.handleChange}
                    type="range"
                    min="0"
                    max="10"
                    value={this.state.val}
                />
                <input
                    className="number-input"
                    onChange={this.handleChange}
                    type="number"
                    min="0"
                    max="10"
                    value={this.state.val}
                />
            </div>
        )
    }
}


export default Slider