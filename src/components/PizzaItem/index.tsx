import React from 'react';
import classes from './index.module.scss'
import {Button} from "../Button";
import {inject, observer} from "mobx-react";
import {useStores} from "../../hooks/useStore";
import {ButtonAddCart} from "../ButtonAddCart";

export interface Props {
    id: number
    title: string
    description: string
    image: string
    price: number
}

const PizzaItem: React.FC<Props> = inject(({cartStore}) => ({
    pizzas: cartStore.pizzas,
    addPizza: cartStore.addPizza,
}))(observer((props) => {
    const {
        id,
        title,
        description,
        image,
        price,
    } = props

    const {cartStore: {pizzas, increment, decrement}} = useStores()

    const pizza = pizzas.find((pizza: { id: number; }) => pizza.id === id)

    const count = !!pizza ? pizza?.count : 0

    return <div className={classes.PizzaItem}>
        <div className={classes.PizzaItem__Content}>
            <img src={image} width={366} height={366} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className={classes.PizzaItem__Footer}>
            <h4 className={classes.PizzaItem__Price}>от {price}₽</h4>
            <h4 className={classes.PizzaItem__Button}>
                {count ? (
                    <ButtonAddCart
                        increment={() => increment(id)}
                        decrement={() => decrement(id)}
                        count={count}
                    />
                ) : (
                    <Button
                        onClick={() => increment(id)}
                    >Добавить</Button>
                )}
            </h4>
        </div>
    </div>
}))

export default PizzaItem;
