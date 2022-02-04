import React, {useState} from 'react'
import {SecretTime} from "../SecretTime";
import {Button} from "../Button";
import {observer} from "mobx-react";
import classes from "./index.module.scss";

interface Props {
}

const CartButtonArrange: React.FC<Props> = observer((props) => {
    const [show, setShow] = useState(false)
    return <div className={classes.CartButtonArrange}>
        <Button onClick={() => setShow(true)}>
            Оформить
        </Button>
        {show && <SecretTime show={show} onClose={() => {
            setShow(false)
        }} />}
    </div>
})

export {CartButtonArrange}
