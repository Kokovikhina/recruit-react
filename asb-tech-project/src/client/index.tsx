import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as BrowserRouter } from 'react-router-dom';
import App from './Components/app';

const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, rootElement);