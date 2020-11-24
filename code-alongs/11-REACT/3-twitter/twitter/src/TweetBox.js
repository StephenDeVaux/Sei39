import { Component } from 'react'
import "./Tweetbox.css"

export default class TweetBox extends Component {
    // constructor(props) {
    //     super(props)
    //     this.handleChange = this.handleChange.bind(this)
    //     this.state = {
    //         content: "Tweet Tweet..."
    //     }
    // }

    //This is the new syntax that facebook created, but whats happening unerneath is above
    state = {
        content: "Tweet Tweet..."
    }

    //fundemantal way of how its working
    // handleChange(e) {
    //     this.setState({
    //         content: e.target.value
    //     })
    // }

    //Arrow funciton doesnt change the context of this
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleTweet() {
        console.log("tweet")
    }

    render() {

        //calculation on every char change
        //can use const here because render is called everytie and therefor is constant but called everytime
        const { content } = this.state
        const charsLeft = 140 - content.length
        const isDisable = content.length < 1 || content.length >= 140
        const styleBar = { width: `${ charsLeft/140 * 100 }%` }

        //Could also do the terniary operator in the long way like below
        // let textBoxClass = ''
        // if(charsLeft<20){
        //     textBoxClass = 'warning'
        // }

        return (
            <div className="tweet-box" >
                <div className="bar-wrapper" >
                    <div className="bar" style={styleBar}></div>
                </div>
                <textarea 
                    className={charsLeft < 20 ? "warning" : ""}
                    onChange={this.handleChange}>
                    {content}
                </textarea>
                <section>
                    <span>{charsLeft}</span>
                    <button
                        disabled={isDisable}
                        onClick={this.handleTweet}>
                        tweet</button>
                </section>
            </div>
        )
    }
}