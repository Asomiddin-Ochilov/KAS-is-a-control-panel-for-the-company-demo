import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Components/store/store";
import {ToastContainer} from "react-toastify";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ToastContainer position={'top-center'}/>
            <App/>
        </BrowserRouter>
    </Provider>

    ,
    document.getElementById('root')
);


