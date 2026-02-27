import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';
import './i18n';
import { GlobalProvider } from './context/GlobalContext';
import ErrorBoundary from './components/common/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <GlobalProvider>
        <HelmetProvider>
          <Toaster position="bottom-right" reverseOrder={false} />
          <App />
        </HelmetProvider>
      </GlobalProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
