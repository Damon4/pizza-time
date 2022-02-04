import {action, makeObservable, observable} from "mobx";
import {PizzaTypeBase} from "../types/pizza";

export class PizzaStore {
    constructor() {
        makeObservable(this, {
            pizzas: observable,
            init: action,
        })
    }

    pizzas: PizzaTypeBase[] = [];

    init = (pizzas: PizzaTypeBase[]) => {
        this.pizzas = pizzas
    }

    find = (id: number) => {
        return this.pizzas.find(f => f.id === id)
    }
}

