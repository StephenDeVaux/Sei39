import { Component } from 'react'
import "./PasswordChecker.css"
import checkPassword from './password_score'

export default class PasswordChecker extends Component {
    state = {
        password: "", 
        showPassword: true, 
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleShow = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    render() {
        const { password, showPassword } = this.state
        let strength = ""
        let style = {}
        let score = checkPassword(password)
        if (score.score < 2) {
            strength = "Weak sauce"
            style = { background: "red" }
        } else if (score.score < 6) {
            strength = "Medium"
            style = { background: "orange" }
        } else {
            strength = "Fort knox"
            style = { background: "green" }
        }

        return (
            <div className="passwordchecker" >
                <input
                    onChange={this.handleChange}
                    type={showPassword? "password" : "text"} />
                <button onClick={this.handleShow}>show</button>
                <div style={style}>{strength}</div>
                <div style={style}>Score : {score.score}</div>
            </div>
        )
    }
}