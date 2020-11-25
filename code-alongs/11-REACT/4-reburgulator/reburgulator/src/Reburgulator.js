import { Component } from 'react'
import React from 'react'
import Burger from './Burger.js'

class Reburgulator extends Component {
    state = {
        ingredients: [],
        itemsRe: [<p>One</p>, <p>two</p>, <p>three</p>]
    }

    renderIngredient = (ingredient, idx) => <p key={idx} onClick={() => this.remove(idx)}>{ingredient}</p>

    add = (ing) => {
        this.setState({
            ingredients: [...this.state.ingredients, ing]
        })
    }

    remove = (idx) => {
        this.setState({
            ingredients: this.state.ingredients.filter((el, index) => index !== idx)
        })
    }

    render() {
        const { ingredients } = this.state
        return (
            <div>
                {/* {this.state.items.map(item => item)} */}
                {/* {React.createElement('div', null, 'hello')}
                {React.createElement('div', null, this.state.itemsRe)}
                {React.createElement('div', null, this.state.items.map(item => <p>{item}</p>) )} */}
                <aside>
                    <h2>menu</h2>
                </aside>
                <button onClick={() => this.add("tomato")}>Tomato</button>
                <button onClick={() => this.add("cheese")}>Cheese</button>
                <button onClick={() => this.add("buns")}>Buns</button>
                <section>
                    <h2>burger</h2>
                    <Burger 
                        ingredients={ingredients}
                        onRemove={this.remove} />
                    {/* <div>{ingredients.map(this.renderIngredient)}</div> */}
                </section>
            </div>
        )
    }
}

export default Reburgulator

//for and foreach loops not so useful because they dont return anything