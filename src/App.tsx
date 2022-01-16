import React, {useEffect, useState} from 'react';
import Container from "./components/Container";
import PizzaItem, {Props as PizzaItemProps} from "./components/PizzaItem";
import Header from "./components/Header";
import classes from './App.module.scss';

const App: React.FC = () => {

    const [pizzas, setPizzas] = useState<PizzaItemProps[]>([])

    useEffect(() => {
        import('./db.json').then((data) => {
            setPizzas(data.default)
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
}

export default App;
