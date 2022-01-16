import React from "react";
import {Button} from "../Button";
import {useStores} from "../../hooks/useStore";
import { observer } from "mobx-react";

type Props = {
    count?: number
}

const CartButton: React.FC<Props> = observer((props) => {
    const {cartStore: {count, clear}} = useStores()
    return <Button onClick={() => clear()}>{count ? `Корзина | ${count}` : 'Корзина'}</Button>
})

export default CartButton
