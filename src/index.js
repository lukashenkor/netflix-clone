import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './global-styles';
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";


const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles/>
      <App />
    </FirebaseContext.Provider>
  </>
);