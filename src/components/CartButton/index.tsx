import React, {useState} from "react";
import {Button} from "../Button";
import { observer } from "mobx-react";
import {SecretTime} from "../SecretTime";
import {cartStore} from "../../stores";

type Props = {
    count?: number
}

const CartButton: React.FC<Props> = observer((props) => {
    const [show, setShow] = useState(false)
    const {count} = cartStore
    return <>
        <Button onClick={() => setShow(true)}>{count ? `Корзина | ${count}` : 'Корзина'}</Button>
        {show && <SecretTime show={show} onClose={() => {setShow(false)}} />}
    </>
})

export default CartButton
