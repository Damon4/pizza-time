import React from "react";
import {Button} from "../Button";
import {observer} from "mobx-react";
import {cartStore} from "../../stores";
import {useNavigate} from "react-router-dom";

type Props = {
    count?: number
}

const CartButton: React.FC<Props> = observer((props) => {
    const {count, price} = cartStore
    const navigate = useNavigate()
    return <Button onClick={() => {navigate('/cart')}}>
        {count
            ? (
                <><b>{price}</b>₽ | {count}</>
            )
            : 'Корзина'}
    </Button>
})

export default CartButton
