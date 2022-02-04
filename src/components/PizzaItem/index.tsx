import React from 'react';
import classes from './index.module.scss'
import {Button} from "../Button";
import {observer} from "mobx-react";
import {ButtonAddCart} from "../ButtonAddCart";
import {cartStore} from "../../stores";
import {PizzaTypeBase} from "../../types/pizza";

const PizzaItem: React.FC<PizzaTypeBase> = observer((props) => {
    const {
        id,
        title,
        description,
        image,
        price,
    } = props

    const {pizzas, increment, decrement} = cartStore

    const count = pizzas.find((pizza: { id: number; }) => pizza.id === id)?.count ?? 0

    return <div className={classes.PizzaItem}>
        <div className={classes.PizzaItem__Content}>
            <img src={image} width={366} height={366} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className={classes.PizzaItem__Footer}>
            <h4 className={classes.PizzaItem__Button}>
                {count ? (
                    <ButtonAddCart
                        increment={() => increment(id)}
                        decrement={() => decrement(id)}
                        count={count}
                        price={price}
                    />
                ) : (
                    <>
                        <h4 className={classes.PizzaItem__Price}>от {price}₽</h4>
                        <Button
                            onClick={() => increment(id)}
                        >Добавить</Button>
                    </>
                )}
            </h4>
        </div>
    </div>
})

export default PizzaItem;
