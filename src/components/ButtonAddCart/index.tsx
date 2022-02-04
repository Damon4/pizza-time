import React from 'react'
import classes from './index.module.scss'

interface Props {
    count: number
    price: number
    increment?: () => void
    decrement?: () => void
}

export const ButtonAddCart: React.FC<Props> = (props) => {
    const {
        count,
        price,
        increment,
        decrement,
    } = props

    return <div className={classes.ButtonAddCart}>
        <div className={classes.ButtonAddCart__decrement} onClick={() => decrement && decrement()}>
            -
        </div>
        <div className={classes.ButtonAddCart__count}>{count} | {price * count}₽</div>
        <div className={classes.ButtonAddCart__increment} onClick={() => increment && increment()}>
            +
        </div>
    </div>
}
