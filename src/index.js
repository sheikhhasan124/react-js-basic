import React from 'react';
import ReactDOM from 'react-dom';
import App from './useContext/App'
import { AppProvider } from './useContext/Contect';





ReactDOM.render(
    <div>
        <AppProvider>
          <App />
        </AppProvider>
     
    </div>
    ,
    document.getElementById('root')
)