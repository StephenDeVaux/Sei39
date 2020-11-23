// using the class syntax to define a component 
import React from 'react'
//const React = require ('react') - both the same just different syntax

//state management
//seperation of concerns
//data & presentation

class LikeButton extends React.Component { 

    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this) //This is to make the this in handleclick work.... what a mess! 


        this.state = {
            count: 1
        }
    }

    handleClick() {
        //always change the state
        //react will proviede the function for this
        this.setState({
            count: this.state.count + 1
        })
    }


    render ()  {
        //can align the div by putting all the html in a brackets and placing on the next line
        return <div> 
                <button onClick={this.handleClick} >Like👍</button> 
                <span>{this.state.count}</span> 
            </div>
    }
}

export default LikeButton