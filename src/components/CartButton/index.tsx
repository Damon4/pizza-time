import React, {useState} from "react";
import {Button} from "../Button";
import {useStores} from "../../hooks/useStore";
import { observer } from "mobx-react";
import {SecretTime} from "../SecretTime";

type Props = {
    count?: number
}

const CartButton: React.FC<Props> = observer((props) => {
    const [show, setShow] = useState(false)
    const {cartStore: {count}} = useStores()
    return <>
        <Button onClick={() => setShow(true)}>{count ? `Корзина | ${count}` : 'Корзина'}</Button>
        {show && <SecretTime show={show} onClose={() => {setShow(false)}} />}
    </>
})

export default CartButton
