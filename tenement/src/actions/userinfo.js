import * as actionTypes from '../constants/userinfo.js'

export function login(data){
    return {
        type:actionTypes.LOGIN,
        data
    }
}
