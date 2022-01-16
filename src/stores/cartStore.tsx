import {action, computed, makeObservable, observable} from "mobx";

class CartStore {
    constructor() {
        makeObservable(this, {
            pizzas: observable,
            count: computed,
            clear: action,
            decrement: action,
            increment: action,
        })
    }

    pizzas: { id: number, count: number }[] = [
        {id: 1, count: 2}
    ];

    get count() {
        return this.pizzas.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.count
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
        let pizza = this.pizzas.find((item) => id === item.id)
        if(pizza) {
            this.increment(id)
        } else {
            this.pizzas.push({
                id: id,
                count: 1,
            });
        }
    }

    private removePizza = (id: number) => {
        this.pizzas = this.pizzas.filter((f) => (f.id !== id))
    }
}

export const cartStore = new CartStore();
