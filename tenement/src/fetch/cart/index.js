import { get } from '../get'

export function getOrderData(username){
    let result = get(`/api/order?username=${username}`)
    return result;
}
