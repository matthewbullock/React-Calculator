import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import Calculator from './Calculator';
import Todo from './Todo';


const Main = () => (
  <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/calculator' component={Calculator}/>
        <Route path='/todo' component={Todo}/>
      </Switch>
    </main>
)


export default Main
