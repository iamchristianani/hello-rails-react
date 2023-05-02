// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

ReactDOM.render(
  <React.StrictMode>    
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
);