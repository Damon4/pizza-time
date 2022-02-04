import React from 'react'
import {observer} from 'mobx-react'
import {cartStore} from '../../stores'
import Container from '../../components/Container'
import PizzaItem from '../../components/PizzaItem'
import {CartButtonArrange} from '../../components/CartButtonArrange'

export const CartPage = observer(() => {

        const {pizzas} = cartStore

        return (
            <>
                <Container>
                    {pizzas.map((pizza) => {
                        return (
                            <PizzaItem key={pizza.id} {...pizza} />
                        )
                    })}
                </Container>
                <hr />
                <CartButtonArrange />
            </>
        )
    },
)
