import React from 'react'
import {pizzaStore} from '../../stores'
import Container from '../../components/Container'
import PizzaItem from '../../components/PizzaItem'

export const HomePage = () => {

    const {pizzas} = pizzaStore

    return (
        <Container>
            {pizzas.map((pizza) => {
                return (
                    <PizzaItem key={pizza.id} {...pizza} />
                )
            })}
        </Container>
    )
}
