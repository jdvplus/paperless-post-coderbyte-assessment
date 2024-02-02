import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App key='app'/>
  </React.StrictMode>
);

// this is stupid __something-something-OCG__
const varOcg = 'this is stupid';
console.log('varOcg: ', varOcg);
