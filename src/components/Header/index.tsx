import React from 'react';
import classes from './index.module.scss'
import CartButton from "../CartButton";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return <div className={classes.Header}>
        <div className={classes.Header__logo}>
            <h1>
                <Link to="/">PizzaTime</Link>
            </h1>
        </div>
        <div className={classes.Header__cart}>
            <CartButton />
        </div>
    </div>
}

export default Header;
