import React from 'react';
import ReactDOM from 'react-dom';
import "./static/css/common.less"
import "./static/css/font.css"
import "./static/css/iconfont.css"
import AppRouter from "./router/AppRouter"
//redux
import configureStore from './store/configureStore.js'
import { Provider } from 'react-redux'

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <AppRouter />
    </Provider>
,document.getElementById('root'));