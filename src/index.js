import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./Store";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Creating redux store
// const store = configureStore()

//Subscribe method gets called only when there are changes made.
store.subscribe(() => {
    console.log(store.getState())
})

console.log(store.getState())

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
