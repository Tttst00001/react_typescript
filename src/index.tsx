import React from 'react';
import ReactDOM from 'react-dom';
// import { ListHome } from './screens/list/index'
import { Login } from 'Ts_test';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <ListHome /> */}
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
