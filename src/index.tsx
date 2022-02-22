import React from 'react';
import ReactDOM from 'react-dom';
// import { ListHome } from './screens/list/index'
import { Login } from 'login';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    {/* <ListHome /> */}
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
