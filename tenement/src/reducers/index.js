import { combineReducers } from 'redux';
import city from './city.js'
import userinfo from './userinfo.js'
import store from './store'

const rootReducer = combineReducers({
    city,
    userinfo,
    store
})

export default rootReducer   