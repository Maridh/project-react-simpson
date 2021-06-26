import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Simpsons from '../pages/Simpsons'
import Filtro from '../pages/Filtro'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'component={Home}/>
                <Route path='/simpsons'component={Simpsons}/>
                <Route path='/filtro'component={Filtro}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas