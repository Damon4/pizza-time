import React from 'react'
import classes from './index.module.scss'

interface Props {
    children?: React.ReactNode
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

export const Button: React.FC<Props> = (props) => {
    const {
        children,
        onClick
    } = props

    return <button onClick={onClick} className={classes.Button}>{children}</button>
}
