import { get } from '../get'

export function getDetailsData(id){
    let result = get(`/api/details?id=${id}`)
    return result;
}

export function getCommentData(id){
    let result = get(`/api/comment?id=${id}`)
    return result;
}