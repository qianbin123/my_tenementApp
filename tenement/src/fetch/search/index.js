import { get } from '../get.js';

export function getSearchList(city,page,keywords){
    let result = get(`/api/search?city=${city}&page=${page}&keywords=${keywords}`)
    return result;
}




