import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {observer} from "mobx-react";
import {pizzaStore} from "./stores";
import Header from "./components/Header";
import classes from './App.module.scss';
import {HomePage} from "./pages/Home";
import {CartPage} from "./pages/Cart";

const App: React.FC = observer(() => {
    const [loading, setLoading] = React.useState(false)

    useEffect(() => {
        import('./db.json').then((data) => {
            pizzaStore.init(data.default)
            setLoading(true)
        })
    }, [])

    return (
        <div className={classes.App}>
            <Header />
            {loading ? (
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            ) : 'Loading...'}
        </div>
    );
})

export default App;
