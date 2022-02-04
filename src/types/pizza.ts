export interface PizzaTypeBase {
    id: number
    title: string
    description: string
    image: string
    price: number
}

export interface PizzaTypeCart extends PizzaTypeBase{
    count: number
}
