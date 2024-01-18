import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import GlobalStyle from './styles/global';
import { AuthProvider } from './contexts/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <GlobalStyle />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();