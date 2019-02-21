import { get } from '../get.js';

export function getShopListData(city,page){
    let result = get(`/api/shop?city=${city}&page=${page}`)
    return result;
}

