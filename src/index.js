import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import GlobalStyle from "../src/assets/styles/GlobalStyle"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>
    <App />
    <GlobalStyle></GlobalStyle>
    </>
    
);


