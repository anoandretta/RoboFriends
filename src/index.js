import React from 'react';
import ReactDOM, { unstable_renderSubtreeIntoContainer } from 'react-dom';
import './index.css';
// Card não esta sendo usado pq só vai usar Pai - CarList, então posso exluir
// import Card from './Card';
// CardList é pai do card- mas deveria ter um único pai que é APP
// import CardList from './CardList'
import App from './Containers/App'
import * as serviceWorker from './serviceWorker';
import 'tachyons';
// tem q por {} pq esta export e não default, aceita vários valores e robots pode ser passado como valor props para carlist e estar no APP
// import {robots} from './robots' 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
