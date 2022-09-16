import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Provider } from "react-redux";
import store from './redux/store' 


import App from './App'
import './index.css'
import { ContextProvider } from './contexts/ContextProvider'

axios.defaults.baseURL = "http://localhost:4000";

ReactDOM.render(
    <Provider store={store}>
        <ContextProvider>
            <App/>
        </ContextProvider>
    </Provider>,
    document.getElementById('root')
)