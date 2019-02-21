import { get } from '../get.js';

export function getHomeHot1Data(cityName){
    let result = get(`/api/homehot1?city=${cityName}`)
    return result;
}

export function getHomeHot2Data(cityName){
    let result = get(`/api/homehot2?city=${cityName}`)
    return result;
} 






