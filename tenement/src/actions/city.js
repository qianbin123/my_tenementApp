import * as actionTypes from '../constants/city.js'

export function update(data){
    return{
        type:actionTypes.UPDATE_CITY,
        data
    }
}




