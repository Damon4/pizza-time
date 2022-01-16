import React from 'react';
import classes from './index.module.scss'
import CartButton from "../CartButton";

export interface Props {
}

const Header: React.FC<Props> = (props) => {
    return <div className={classes.Header}>
        <div className={classes.Header__logo}>
            <h1>PizzaTime</h1>
        </div>
        <div className={classes.Header__cart}>
            <CartButton />
        </div>
    </div>
}

export default Header;
