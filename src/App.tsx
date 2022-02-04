import React, {useEffect} from 'react';
import Container from "./components/Container";
import PizzaItem from "./components/PizzaItem";
import Header from "./components/Header";
import classes from './App.module.scss';
import {pizzaStore} from "./stores";
import {observer} from "mobx-react";

const App: React.FC = observer(() => {

    const {pizzas} = pizzaStore

    useEffect(() => {
        import('./db.json').then((data) => {
            pizzaStore.init(data.default)
        })
    }, [])

    return (
        <div className={classes.App}>
            <Header />
            <Container>
                {pizzas.map((pizza) => {
                    return (
                        <PizzaItem key={pizza.id} {...pizza} />
                    )
                })}
            </Container>
        </div>
    );
})

export default App;
