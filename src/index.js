import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './Contexts/Authcontext';
import { Postprovider } from './Contexts/Postcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <AuthProvider>
    <Postprovider>
    <App/>
    </Postprovider>
    </AuthProvider>
    

  
);
