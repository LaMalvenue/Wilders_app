import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {FormContextProvider} from "./providers/FormContext";
import {WildersContextProvider} from "./providers/WildersContext";

ReactDOM.render(
    <React.StrictMode>
        <WildersContextProvider>
            <FormContextProvider>
                <App/>
            </FormContextProvider>
        </WildersContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
