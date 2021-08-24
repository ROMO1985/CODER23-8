import React from 'react'
import ShoppingCard from './Componentes/ShoppingCard'
import  "./Componentes/style.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Cart from './Componentes/Cart';

const App = () => {
    return (
        <>

<Router>
<Switch>

<Route path="/Cart" component={ShoppingCard} /> 
<Route path="/" component={ShoppingCard} />              

</Switch>

</Router>

        </>
    )
}

export default App