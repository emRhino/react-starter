import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const elem = <h1>Witaj w JSX!</h1>;

const course = (
  <div className="wrapper">
    <img src="http://placekitten.com/100/100" />
    <h2>Test</h2>
    <p className="desc">Opis</p>
  </div>);

ReactDOM.render(elem,document.getElementById('root'));
