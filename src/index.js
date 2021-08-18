import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { configureStore } from './store';
import { Provider } from 'react-redux';

//call configureStore to create store
const store = configureStore();
console.log('STORE_______', store, store.getState());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
