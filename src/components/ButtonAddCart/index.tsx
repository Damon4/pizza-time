import React from 'react'
import classes from './index.module.scss'

interface Props {
    count?: number
    increment?: () => void
    decrement?: () => void
}

export const ButtonAddCart: React.FC<Props> = (props) => {
    const {
        count,
        increment,
        decrement,
    } = props

    return <div className={classes.ButtonAddCart}>
        <div className={classes.ButtonAddCart__decrement} onClick={() => decrement && decrement()}>
            -
        </div>
        <div className={classes.ButtonAddCart__count}>{count}</div>
        <div className={classes.ButtonAddCart__increment} onClick={() => increment && increment()}>
            +
        </div>
    </div>
}
