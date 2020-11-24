import { Component } from 'react'
import './Creditcard.css'

export default class Creditcard extends Component {
    state = {
        cardNum: ""
    }

    handleChange = (e) => {
        this.setState({
            cardNum: e.target.value
        })
    }

    render() {
        const { cardNum } = this.state
        let type = ""
        if (cardNum.substring(0, 2) === "34" || cardNum.substring(0, 2) === "37") {
            type = "AMEX"
        } else if (cardNum.substring(0, 4) === "6011") {
            type = "Discover"
        } else if (Number(cardNum.substring(0, 2)) >= 51 && Number(cardNum.substring(0, 2)) <= 55) {
            type = "MasterCard"
        } else if (cardNum.substring(0, 1) === "4") {
            type = "Visa"
        }
        return (
            <div className="credit-card">
                <input
                    onChange={this.handleChange}
                    type="text" />
                <div>{type}</div>
            </div>
        )
    }
}