import {action, computed, makeObservable, observable} from "mobx";
import {PizzaTypeCart} from "../types/pizza";
import {pizzaStore} from "./index";

export class CartStore {
    constructor() {
        makeObservable(this, {
            pizzas: observable,
            count: computed,
            price: computed,
            clear: action,
            decrement: action,
            increment: action,
        })
    }

    pizzas: PizzaTypeCart[] = [];

    get count() {
        return this.pizzas.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.count
        }, 0);
    }

    get price() {
        return this.pizzas.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.price * currentValue.count
        }, 0);
    }

    clear = () => {
        this.pizzas = []
    }

    decrement = (id: number) => {
        let pizza = this.pizzas.find((item) => id === item.id)
        if(pizza) {
            if(pizza.count <= 1) {
                this.removePizza(id)
            } else {
                pizza.count--
            }
        }

    }

    increment = (id: number) => {
        const pizza = this.pizzas.find((item) => id === item.id)
        if(pizza?.count) {
            pizza.count++
        } else {
            this.addPizza(id)
        }
    }

    private addPizza = (id: number) => {
        const item = this.pizzas.find((item) => id === item.id)
        const pizza = pizzaStore.find(id)

        if(item) {
            this.increment(id)
        } else {
            this.pizzas.push({
                ...pizza,
                count: 1,
            } as PizzaTypeCart);
        }
    }

    private removePizza = (id: number) => {
        this.pizzas = this.pizzas.filter((f) => (f.id !== id))
    }
}

