import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData =  [
  {id:1, name:'Olga', message: "Hi!", likes:'20'},
  {id:2, name:'Jane', message: "It's my first message", likes:'1120'},
  {id:3, name:'Denis', message: "Yo", likes:'21220'},
  {id:4, name:'Bogdan', message: "Yo", likes:'2230'},
  {id:4, name:'Olga', message: "yo", likes:'2011'},
]

let dialogsData =  [
  {id:1, name: 'Dimych'},
  {id:2, name: 'Jane'},
  {id:3, name: 'Denise'},
  {id:4, name: 'Bogdan'},
]

let messagesData =  [
  {id:1, message: "Hi!"},
  {id:2, message: "How're you?"},
  {id:3, message: "I'm fine, thanks. And you?"},
  {id:4, message: "im fine too. What's new?"},
  {id:4, message: "yo"},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={postData} messages={messagesData} dialogs={dialogsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

