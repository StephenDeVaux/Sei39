import { Component } from 'react'
import "./PasswordChecker.css"

export default class PasswordChecker extends Component {
    state = {
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        const { password } = this.state
        let strength = ""
        let style = {}
        if (password.length < 6) {
            strength = "Weak"
            style = { background: "red" }
        } else if (password.length < 12) {
            strength = "Medium"
            style = { background: "orange" }
        } else {
            strength = "Strong"
            style = { background: "green" }
        }

        return (
            <div className="passwordchecker" >
                <input
                    onChange={this.handleChange}
                    type="password" />
                <div style={style}>{strength}</div>
            </div>
        )
    }
}