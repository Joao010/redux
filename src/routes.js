import React from 'react'
import {BrowserRouter, Switch, Route}  from 'react-router-dom'

import Header from './pages/Header'
import Home from './pages/Home'
import Reservas from './pages/Reservas'

export default function Routes(){
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/reservas' component={Reservas}/>
      </Switch>
    </BrowserRouter>
  )
}