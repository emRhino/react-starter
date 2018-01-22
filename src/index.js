import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const data = {
  title: "temat wpisu",
  content: "Wpis na blogu, wpis na blogu...",
  image: "https://placebear.com/300/200",
  promo: false
}

const elem = <h1>Witaj w JSX!</h1>;

const course = (
  <div className="wrapper">
    <img src={data.image} />
    <h2>{data.title}</h2>
    <p className="desc">{data.content}</p>
    { data.promo ? <b>Promowany</b> : null }
  </div>
)

ReactDOM.render(course,document.getElementById('root'));

// Komentarze JSX
