import { Component } from 'react'
import React from 'react'
import Burger from './Burger.js'
import Menu from './Menu.js'
import getCheeseyName from './cheesylabel.js'

function Reburgulator ()  {
    
        return (
            <div>
                <section>
                    <h2>burger</h2>
                    <Burger  />
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