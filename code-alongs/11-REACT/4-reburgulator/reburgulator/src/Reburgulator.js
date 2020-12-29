import { Component } from 'react'
import React from 'react'
import Burger from './Burger.js'
import Menu from './Menu.js'
import getCheeseyName from './cheesylabel.js'

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

    clearAll = () => { 
        this.setState({
            ingredients: []
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
                <Menu 
                    onAdd={this.add}
                    onClear={this.clearAll}/>
                <section>
                    <h2>burger</h2>
                    <Burger 
                        ingredients={ingredients}
                        onRemove={this.remove} />
                    {/* <div>{ingredients.map(this.renderIngredient)}</div> */}
                </section>
                <aside>
                    { getCheeseyName(ingredients) }
                </aside>

            </div>
        )
    }
}

export default Reburgulator

//for and foreach loops not so useful because they dont return anything