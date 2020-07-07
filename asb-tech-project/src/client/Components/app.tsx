import React from "react";
import { Link } from 'react-router-dom';
import { Route as Route } from 'react-router-dom';
import Form from './Form';
import Menu from './Menu';

export default function App () {
  return (
    <div>
      <ul role="nav">
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/payment">Payment</Link></li>
      </ul>
      <Route path="/menu" component={Menu}/>
      <Route path="/payment" exact render={() => <Form name={"Darya"} />}/>
    </div>
  );
}
