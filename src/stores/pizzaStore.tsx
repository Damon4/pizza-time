import {action, makeObservable, observable} from "mobx";
import {PizzaType} from "../types/pizza";

export class PizzaStore {
    constructor() {
        makeObservable(this, {
            pizzas: observable,
            init: action,
        })
    }

    pizzas: PizzaType[] = [];

    init = (pizzas: PizzaType[]) => {
        this.pizzas = pizzas
    }
}

