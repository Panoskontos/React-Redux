import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// add store
import { Provider } from "react-redux"
import { legacy_createStore as createStore } from 'redux'
import Allreducers from './reducers/Allreducers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // wrap provider around app
  <Provider store={createStore(Allreducers)}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  
  </Provider>
);


reportWebVitals();
